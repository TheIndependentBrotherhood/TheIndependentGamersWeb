// Require

const express = require('express');
const router = express.Router();

// Controller

const jeuxCtrl = require('../controllers/jeu');
const homeController = require('../controllers/upload')

// Middleware

// const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes

router.post('/jeux', multer.single("file"), jeuxCtrl.createJeu);
router.get('/jeux', jeuxCtrl.findJeuList);
router.get('/jeux/:id', jeuxCtrl.findJeu);
router.put('/jeux/:id', multer.single("file"), jeuxCtrl.updateJeu);
router.delete('/jeux/:id', jeuxCtrl.deleteJeu);

module.exports = router;