// Require

const express = require('express');
const router = express.Router();

// Controller

const membreCtrl = require('../controllers/membre');
const homeController = require('../controllers/upload')

// Middleware

// const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes

router.post('/membre', multer.single("file"), membreCtrl.createMembre);
router.get('/membre', homeController.getHome);
// router.get('/membre', membreCtrl.findMembreList);
router.get('/membre/membre', membreCtrl.findMembre);
router.get('/membre/staff', membreCtrl.findStaff);
router.get('/membre/admin', membreCtrl.findAdmin);
router.put('/membre/:id', multer.single("file"), membreCtrl.updateMembre);
router.delete('/membre/:id', multer.single("file"), membreCtrl.deleteMembre);

module.exports = router;