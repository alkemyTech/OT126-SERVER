const getOffset = (page, limit) => {
  if (!page || page === '1' || page === '0' || page < 0) return 0

  const defaultValue = Math.abs(limit * page) - limit
  return isNaN(defaultValue) ? 0 : defaultValue
}

const getUrl = (req) => {
  const { protocol, host, baseUrl } = req
  const port = process.env.PORT || '3000'
  return `${protocol}://${host}:${port}${baseUrl}/?page=`
}

const getPreviousPage = (count, offset, limit) => {
  if (offset === 0 || count === 0) return null
  return count > offset
    ? Math.round(offset / limit)
    : Math.ceil(count / limit)
}

const getNextPage = (count, offset, limit) => {
  const totalPages = Math.ceil(count / limit)
  const nextPage = Math.round((offset + limit) / limit)
  return (totalPages - nextPage) > 0
    ? parseInt(nextPage) + 1
    : null
}

const getUrlPage = (fun, data) => {
  const UrlPage = fun(data.count, data.offset, data.limit)
  if (UrlPage === null) return null
  return `${data.url}${UrlPage}`
}

const paginate = async (repository, req, limit) => {
  const { page } = req.query
  const offset = getOffset(page, limit)
  const { count, rows } = await repository(offset, limit)
  const url = getUrl(req)
  const data = { count, limit, offset, url }

  const previousPage = getUrlPage(getPreviousPage, data)
  const nextPage = getUrlPage(getNextPage, data)

  return {
    previousPage,
    nextPage,
    data: rows
  }
}
module.exports = {
  paginate
}
