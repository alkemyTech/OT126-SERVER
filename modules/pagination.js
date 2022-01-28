
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

const getPreviusPage = (count, offset, url) => {
  const currentPage = Math.round(offset / 10) + 1
  if (count > offset) return offset === 0 ? null : `${url}${currentPage - 1}`
  return Math.ceil(count / 10)
}

const getNextPage = (count, offset, url) => {
  const totalPages = Math.ceil(count / 10)
  const currentPage = Math.ceil(offset / 10) + 1
  return (totalPages - currentPage) > 0
    ? `${url}${parseInt(currentPage) + 1}`
    : null
}

const pagination = async (repositorie, req) => {
  const { page } = req.query
  const offset = getOffset(page)
  const data = await repositorie(offset)
  const url = getUrl(req)

  const previusPage = getPreviusPage(data.count, offset, url)
  const nextPage = getNextPage(data.count, offset, url)

  return {
    previusPage,
    nextPage,
    data: data.rows
  }
}

module.exports = pagination
