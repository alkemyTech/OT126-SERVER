const express = require('express');

const router = express.Router();
const membersController = require('../controllers/members');
const authMiddleware = require('../middlewares/auth');

router.delete('/:id', authMiddleware.isAuth, membersController.remove);
router.put('/:id', authMiddleware.isAuth, membersController.update);

module.exports = router;
