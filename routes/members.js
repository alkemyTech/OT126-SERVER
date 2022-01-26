const express = require('express')

<<<<<<< .merge_file_a12744
const router = express.Router()
const membersController = require('../controllers/members')
const authMiddleware = require('../middlewares/auth')
const { updateReqValidation, createReqValidation } = require('../middlewares/members-validations')

router.delete('/:id', authMiddleware.isAuth, membersController.remove)
router.put('/:id', authMiddleware.isAuth, updateReqValidation, membersController.update)
router.post('/', authMiddleware.isAuth, createReqValidation, membersController.create)
router.delete('/:id', authMiddleware.isAuth, membersController.remove)
router.get('/', membersController.getAll)
=======
const router = express.Router();
const membersController = require('../controllers/members');
const authMiddleware = require('../middlewares/auth');
const { updateReqValidation, createReqValidation } = require('../middlewares/members-validations')

router.delete('/:id', authMiddleware.isAuth, membersController.remove);
router.put('/:id', authMiddleware.isAuth, updateReqValidation, membersController.update);
router.post('/', authMiddleware.isAuth, createReqValidation, membersController.create)
router.get('/', membersController.getAll);
>>>>>>> .merge_file_a04844

module.exports = router
