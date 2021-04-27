const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

const auth = require('../middleware/auth');

router.post('/signup' , userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/logincheck', userCtrl.checkIsLogin);
router.get('/profile', auth.userRequest, userCtrl.getUserProfile);
router.put('/profile', auth.userRequest, userCtrl.updateUserProfile);

module.exports = router;