
const getOffset = (page) => {
  let defaultValue = 0
  if (page && page !== '1' && page !== '0') defaultValue = Math.abs(10 * page) - 10
  return isNaN(defaultValue) ? 0 : defaultValue
}

const getUrl = (req) => {
  const { protocol, host, baseUrl } = req
  const port = process.env.PORT || '3000'
  return `${protocol}://${host}:${port}${baseUrl}/?page=`
}

const getPreviousPage = (count, offset) => {
  const currentPage = Math.round(offset / 10) + 1
  if (count > offset) return offset === 0 ? null : currentPage - 1
  return Math.ceil(count / 10)
}

const getNextPage = (count, offset) => {
  const totalPages = Math.ceil(count / 10)
  const currentPage = Math.ceil(offset / 10) + 1
  return (totalPages - currentPage) > 0
    ? parseInt(currentPage) + 1
    : null
}

const getUrlPage = (fun, count, offset, url) => {
  const UrlPage = fun(count, offset)
  if (UrlPage === null) return null
  return `${url}${UrlPage}`
}

const pagination = async (repository, req) => {
  const { page } = req.query
  const offset = getOffset(page)
  const data = await repository(offset)
  const url = getUrl(req)

  const previousPage = getUrlPage(getPreviousPage, data.count, offset, url)
  const nextPage = getUrlPage(getNextPage, data.count, offset, url)

  return {
    previousPage,
    nextPage,
    data: data.rows
  }
}

module.exports = pagination
