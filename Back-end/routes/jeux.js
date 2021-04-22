// Require

const express = require('express');
const router = express.Router();

// Controller

const jeuxCtrl = require('../controllers/jeu');

// Middleware

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-jeu');

// Routes

router.post('/jeux', auth.adminRequest, multer, jeuxCtrl.createJeu);
router.get('/jeux', jeuxCtrl.findJeuList);
router.get('/jeux/:id', jeuxCtrl.findJeu);
router.put('/jeux/:id', auth.adminRequest, multer, jeuxCtrl.updateJeu);
router.delete('/jeux/:id', auth.adminRequest, jeuxCtrl.deleteJeu);

module.exports = router;