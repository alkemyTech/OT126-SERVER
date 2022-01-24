const express = require('express');

const router = express.Router();
const membersController = require('../controllers/members');
const authMiddleware = require('../middlewares/auth');
const { updateReqValidation } = require('../middlewares/members-validations')

router.delete('/:id', authMiddleware.isAuth, membersController.remove);
router.put('/:id', authMiddleware.isAuth, updateReqValidation, membersController.update);

module.exports = router;
