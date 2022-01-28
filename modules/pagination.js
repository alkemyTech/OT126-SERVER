
const getPreviusPage = (count, offset) => {
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

const getOffset = (page) => {
  let defaultValue = 0
  if (page && page !== '1' && page !== '0') defaultValue = Math.abs(10 * page) - 10
  return isNaN(defaultValue) ? 0 : defaultValue
}

const pagination = async (repositorie, req) => {
  const { page } = req.query
  const offset = getOffset(page)
  const data = await repositorie(offset)

  const previusPage = getPreviusPage(data.count, offset)
  const nextPage = getNextPage(data.count, offset)

  return {
    previusPage,
    nextPage,
    data: data.rows
  }
}

module.exports = pagination
