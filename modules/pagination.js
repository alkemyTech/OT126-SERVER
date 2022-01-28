
const getOffset = (page, limit) => {
  let defaultValue = 0
  if (page && page !== '1' && page !== '0' && page > 0) defaultValue = Math.abs(limit * page) - limit
  return isNaN(defaultValue) ? 0 : defaultValue
}

const getUrl = (req) => {
  const { protocol, host, baseUrl } = req
  const port = process.env.PORT || '3000'
  return `${protocol}://${host}:${port}${baseUrl}/?page=`
}

const getPreviousPage = (count, offset, limit) => {
  const currentPage = Math.round(offset / limit) + 1
  if (count > offset) return offset === 0 ? null : currentPage - 1
  return Math.ceil(count / limit)
}

const getNextPage = (count, offset, limit) => {
  const totalPages = Math.ceil(count / limit)
  const currentPage = Math.ceil(offset / limit) + 1
  return (totalPages - currentPage) > 0
    ? parseInt(currentPage) + 1
    : null
}

const getUrlPage = (fun, count, limit, offset, url) => {
  const UrlPage = fun(count, offset, limit)
  if (UrlPage === null) return null
  return `${url}${UrlPage}`
}

const pagination = async (repository, req, limit) => {
  const { page } = req.query
  const offset = getOffset(page, limit)
  const data = await repository(offset, limit)
  const url = getUrl(req)

  const previousPage = getUrlPage(getPreviousPage, data.count, limit, offset, url)
  const nextPage = getUrlPage(getNextPage, data.count, limit, offset, url)

  return {
    previousPage,
    nextPage,
    data: data.rows
  }
}

module.exports = {
  pagination
}
