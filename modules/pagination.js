
const getPageValidate = ({ page }) => {
  if (page === undefined) return true
  const reg = /^[0-9]*$/
  return reg.exec(page) !== null
}

const getOffset = ({ page }, limit) => {
  if (page === undefined) return 0
  return page === '0' ? 0 : (page * limit) - limit
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
  const validPage = getPageValidate(req.query)

  if (!validPage) {
    const error = new Error()
    error.status = 400
    error.validationError = {
      errors: [
        {
          value: req.query.page,
          msg: 'invalid number',
          param: 'page',
          location: 'query'
        }
      ]
    }
    throw error
  }

  const offset = getOffset(req.query, limit)
  const { count, rows } = await repository(offset, limit)
  const url = getUrl(req)
  const data = { count, limit, offset, url }

  const previousPage = getUrlPage(getPreviousPage, data)
  const nextPage = getUrlPage(getNextPage, data)

  const totalPage = Math.ceil(count / limit)

  return {
    pagesUrl: {
      previous: previousPage,
      next: nextPage
    },
    itemsCount: count,
    totalPages: totalPage,
    data: rows
  }
}
module.exports = {
  paginate
}
