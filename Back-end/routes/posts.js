// Require

const express = require('express');
const router = express.Router();

// Controller

const postCtrl = require('../controllers/post');

// Middleware

const auth = require('../middleware/auth');

// Routes

router.post('/posts', auth.userRequest, postCtrl.createPost);
router.get('/posts', postCtrl.findPostList);
router.get('/posts/all', auth.adminRequest, postCtrl.findAllPostList);
router.get('/posts/:id', postCtrl.findPost);
router.put('/posts/:id', auth.adminRequest, postCtrl.updatePost);
router.delete('/posts/:id', auth.adminRequest, postCtrl.deletePost);

module.exports = router;