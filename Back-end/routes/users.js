const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
// const multer = require('../middleware/multer-config');

router.post('/signup' , userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/profile', userCtrl.getUserProfile);
router.put('/profile', userCtrl.updateUserProfile);

module.exports = router;