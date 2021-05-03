// Require

const bcrypt = require('bcrypt');
const jwtUtils = require('../middleware/auth');
const models = require('../models');
const asyncLib = require('async');
const fs = require('fs');
const multer = require('multer');

exports.createJeu = async (req, res) => {
  try {


    console.log(req.body, req.file)

    let nameSend = req.body.name;
    let pictureSend = `https://api.theindependentgamers.fr/images/jeux/${req.file.filename}`;
    let decriptionSend = req.body.description;

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    models.Jeu.create({
      name: nameSend,
      picture: pictureSend,
      description: decriptionSend,
      isActive: true
    }).then((jeu) => {
      const message = 'Le jeu a bien été ajouté.'
      res.status(201).json({ message, data: jeu })
    })
    .catch(error => {
      const message = 'Le jeu n\'a pas pu être ajouté. Réessayer dans quelques instant.'
      res.status(500).json({ message, data: error})
    })
  } catch (error) {
    console.log(error);
    return res.send(`Une erreur est survenue lors de l'ajout du jeu: ${error}`);
  }
};

exports.findJeuList = (req, res, next) => {

  models.Jeu.findAll({
    where:{
      isActive: true
    }
  })
  .then(jeux => {
    const message = 'La liste de tous les jeux à bien été récupérée.'
    res.status(200).json({ message, data: jeux })
  })
  .catch(error => {
    const message = 'La liste de tout les jeux n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

};

exports.findJeu = (req, res, next) => {

  const id = req.params.id

  models.Jeu.findAll({
    where:{
      id: id
    }
  })
  .then(membres => {
    const message = 'Le jeu à bien été récupérée.'
    res.status(200).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'Le jeu n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.updateJeu = (req, res, next) => {

    const id = req.params.id

    models.Jeu.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      models.Jeu.findByPk(id).then(membre => {
        const message = `Le Jeu ${membre.name} a bien été modifié.`
        res.status(201).json({message, data: membre })
      })
      .catch(error => {
        const message = 'Le Jeu n\'a pas pu être modifié. Réessayer dans quelques instant.'
        res.status(500).json({ message, data: error})
      })
    })
    .catch(error => {
      const message = 'Le Jeu n\a pas pu être modifié.'
      res.status(500).json({ message, data: error})
    })

}

exports.deleteJeu = (req, res, next) => {

  const id = req.params.id

  models.Jeu.findByPk(req.params.id).then(membre => {
    const jeuDeleted = membre;
    models.Jeu.destroy({
      where: { id: membre.id }
    })
    .then(_ => {
      const message = `Le Jeu ${jeuDeleted.name} avec l'identifiant n°${jeuDeleted.id} a bien été supprimé.`
      res.json({message, data: jeuDeleted })
    })
    .catch(error => {
      const message = 'Le Jeu n\'as pas pu être supprimé'
      res.status(500).json({ message, data: error})
    })
  })

}
