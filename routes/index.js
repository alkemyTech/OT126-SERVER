const express = require('express')

const router = express.Router()

const categoriesRoutes = require('./categories')
const testimonialsRoutes = require('./testimonials')
const organizationRoutes = require('./organizations')
const membersRoute = require('./members')
const commentsRoutes = require('./comments')
const slidesRoute = require('./slides')
const contactsRoute = require('./contacts')
const backofficeRoute = require('./backoffice')
const newsRoutes = require('./news')
const authRoutes = require('./auth')

router.use('/categories', categoriesRoutes)
router.use('/organizations', organizationRoutes)
router.use('/testimonials', testimonialsRoutes)
router.use('/members', membersRoute)
router.use('/comments', commentsRoutes)
router.use('/slides', slidesRoute)
router.use('/contacts', contactsRoute)
router.use('/backoffice', backofficeRoute)
router.use('/news', newsRoutes)
router.use('/auth', authRoutes)

module.exports = router
