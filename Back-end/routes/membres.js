// Require

const express = require('express');
const router = express.Router();

// Controller

const membreCtrl = require('../controllers/membre');

// Middleware

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-membre');

// Routes

router.post('/membre', auth.adminRequest, multer, membreCtrl.createMembre);
router.get('/membre', membreCtrl.findMembreList);
router.get('/membre/all', auth.adminRequest, membreCtrl.findAllMembreList);
router.get('/membre/membre', membreCtrl.findMembre);
router.get('/membre/staff', membreCtrl.findStaff);
router.get('/membre/admin', membreCtrl.findAdmin);
router.put('/membre/:id', auth.adminRequest, multer, membreCtrl.updateMembre);
router.delete('/membre/:id', auth.adminRequest, multer, membreCtrl.deleteMembre);

module.exports = router;