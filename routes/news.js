const express = require('express')

const router = express.Router()

const newsController = require('../controllers/news')
const newsValidations = require('../middlewares/news-validations')
const authMiddleware = require('../middlewares/auth')

router.post('/', authMiddleware.isAdmin, newsValidations.create, newsController.create)
router.delete('/:id', authMiddleware.isAdmin, newsValidations.remove, newsController.remove)
router.get('/:id', authMiddleware.isAdmin, newsValidations.getById, newsController.getById)
router.put('/:id', authMiddleware.isAdmin, newsValidations.update, newsController.update)
router.get('/', authMiddleware.isAuth, newsController.getAll)
router.get('/:id/comments', authMiddleware.isAuth, newsController.getCommentsByNoveltyId)

module.exports = router
