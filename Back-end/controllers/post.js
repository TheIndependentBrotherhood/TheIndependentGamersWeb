// Require

const bcrypt = require('bcrypt');
const jwtUtils = require('../middleware/auth');
const models = require('../models');
const asyncLib = require('async');
const fs = require('fs');
const multer = require('multer');

exports.createPost = async (req, res) => {
  try {

    const { userId, title, status, content } = req.body

    console.log(req.body);

    const user = await models.User.findOne({ where: { id: userId}})

    models.Post.create({
      title,
      status,
      content,
      userId: user.id,
      isActive: true
    }).then((post) => {
      const message = 'La candidature à bien été posté.'
      res.status(201).json({ message, data: post })
    })
    .catch(error => {
      const message = 'La candidature n\'a pas pu être posté. Réessayer dans quelques instant.'
      res.status(500).json({ message, data: error})
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Une erreur est survenue lors de l'ajout du post: ${error}`);
  }
};

exports.findPostList = (req, res, next) => {

  models.Post.findAll({
    where:{
      isActive: true
    },
    include: [{
      model: models.User,
      attributes: [ 'id', 'name'],
    },
    {
      model: models.Message,
      where: {isActive: true},
      attributes: [ 'id', 'content', 'createdAt' ],
      include: [{
        model: models.User,
        attributes: [ 'id', 'name'],
      }],
      required: false,
    }]
  })
  .then(posts => {
    const message = 'La liste des postes à bien été récupérée.'
    res.status(200).json({ message, data: posts })
  })
  .catch(error => {
    const message = 'La liste de tout les postes n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

};

exports.findPost = (req, res, next) => {

  const id = req.params.id

  models.Post.findOne({
    where:{
      id: id,
      isActive: true
    },
    include: [{
        model: models.User,
        attributes: [ 'id', 'name'],
        model: models.message,
    }]
  })
  .then(membres => {
    const message = 'Le post à bien été trouvée.'
    res.status(200).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'Le post n\'a pas pu être trouvée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.updatePost = (req, res, next) => {

    const id = req.params.id

    models.Post.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      models.Post.findByPk(id).then(post => {
        const message = `Le Post ${post.title} a bien été modifié.`
        res.status(201).json({message, data: post })
      })
      .catch(error => {
        const message = 'Le Post n\'a pas pu être modifié. Réessayer dans quelques instant.'
        res.status(500).json({ message, data: error})
      })
    })
    .catch(error => {
      const message = 'Le Post n\a pas pu être modifié.'
      res.status(500).json({ message, data: error})
    })

}

exports.deletePost = (req, res, next) => {

  const id = req.params.id

  models.Post.findByPk(req.params.id).then(post => {
    const postDeleted = post;
    models.Post.destroy({
      where: { id: post.id }
    })
    models.Message.destroy({
      where: { postId: post.id }
    })
    .then(_ => {
      const message = `Le Post "${postDeleted.title}" et ses messages lié, avec l'identifiant n°${postDeleted.id} a bien été supprimé.`
      res.json({message, data: postDeleted })
    })
    .catch(error => {
      const message = 'Le Post n\'as pas pu être supprimé'
      res.status(500).json({ message, data: error})
    })
  })

}