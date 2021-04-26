// Require

const bcrypt = require('bcrypt');
const jwtUtils = require('../middleware/auth');
const models = require('../models');
const asyncLib = require('async');
const fs = require('fs');
const multer = require('multer');

exports.createMessage = async (req, res) => {
  try {

    const { userId, postId, content } = req.body

    const user = await models.User.findOne({ where: { id: userId}})

    const post = await models.Post.findOne({ where: { id: postId}})

    models.Message.create({
      content,
      userId: user.id,
      postId: post.id,
      isActive: true
    }).then((post) => {
      const message = 'Le message à bien été posté.'
      res.status(201).json({ message, data: post })
    })
    .catch(error => {
      const message = 'Le message n\'a pas pu être posté. Réessayer dans quelques instant.'
      res.status(500).json({ message, data: error})
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json(`Une erreur est survenue lors de l'ajout du message: ${error}`);
  }
};

exports.findMessageList = (req, res, next) => {

  models.Message.findAll({
    include: [{
        model: models.User,
        attributes: [ 'id', 'name'],
    }]
  })
  .then(posts => {
    const message = 'La liste des message à bien été récupérée.'
    res.status(200).json({ message, data: posts })
  })
  .catch(error => {
    const message = 'La liste de tout les message n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

};

exports.findMessagesFromPost = (req, res, next) => {

  const id = req.params.id;

  // const post = models.Post.findOne({ where: { id: id}});


  models.Message.findAll({
    where:{
      postId: id,
      isActive: true
    },
    include: [{
        model: models.User,
        attributes: [ 'id', 'name' ],
    }]
  })
  .then(messages => {
    const message = 'La liste des message à bien été récupérée.'
    res.status(200).json({ message, data: messages })
  })
  .catch(error => {
    const message = 'La liste de tout les message n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

};

exports.findMessage = (req, res, next) => {

  const id = req.params.id

  models.Message.findOne({
    where:{
      id: id,
      isActive: true
    },
    include: [{
        model: models.User,
        attributes: [ 'id', 'name'],
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

exports.updateMessage = (req, res, next) => {

    const id = req.params.id

    models.Message.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      models.Message.findByPk(id).then(message => {
        const messageSend = `Le Message ${message.title} a bien été modifié.`
        res.status(201).json({messageSend, data: message })
      })
      .catch(error => {
        const messageSend = 'Le Message n\'a pas pu être modifié. Réessayer dans quelques instant.'
        res.status(500).json({ messageSend, data: error})
      })
    })
    .catch(error => {
      const messageSend = 'Le Post n\a pas pu être modifié.'
      res.status(500).json({ messageSend, data: error})
    })

}

exports.deleteMessage = (req, res, next) => {

  const id = req.params.id

  models.Message.findByPk(req.params.id).then(post => {
    const messageDeleted = message;
    models.Message.destroy({
      where: { id: message.id }
    })
    .then(_ => {
      const message = `Le Message "${messageDeleted.title}" avec l'identifiant n°${messageDeleted.id} a bien été supprimé.`
      res.json({message, data: messageDeleted })
    })
    .catch(error => {
      const message = 'Le Message n\'as pas pu être supprimé'
      res.status(500).json({ message, data: error})
    })
  })

}