const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/me', userController.getMe);
router.get('/', userController.getAllUsers);

module.exports = router;
