const isAdmin = async (req, res, next) => {
  const { roleId } = req.user
  if (roleId === 2) {
    next()
  } else {
    res.status(403).json({ error: 'Unauthorized access' })
  }
}

const isAuth = async (req, res, next) => {
  // not implemented
  next()
}

const isOwnUser = async (req, res, next) => {
  // not implemented
  next()
}

module.exports = {
  isAdmin,
  isAuth,
  isOwnUser
}
