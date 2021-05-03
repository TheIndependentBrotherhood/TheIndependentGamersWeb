// Require

const bcrypt = require('bcrypt');
const jwtUtils = require('../middleware/auth');
const models = require('../models');
const asyncLib = require('async');
const fs = require('fs');
const multer = require('multer');

exports.createMembre = async (req, res) => {
  try {

    console.log(req.body, req.file)

    let nameSend = req.body.name;
    let pictureSend = `${req.protocol}://${req.get('host')}/images/membres/${req.file.filename}`;
    let roleSend = req.body.role;

    models.Membre.create({
      name: nameSend,
      picture: pictureSend,
      role: roleSend,
      isActive: true
    }).then((membre) => {
      const message = 'Le membre a bien été ajouté.'
      res.status(201).json({ message, data: membre })
    })
    .catch(error => {
      const message = 'Le membre n\'a pas pu être ajouté. Réessayer dans quelques instant.'
      res.status(500).json({ message, data: error})
    })

  } catch (error) {
    console.log(error);
    return res.send(`Une erreur est survenue lors de l'ajout du membre: ${error}`);
  }
};

exports.findMembreList = (req, res, next) => {

  models.Membre.findAll({
    where:{
      isActive: true
    }
  })
  .then(membres => {
    const message = 'La liste de tous les membres à bien été récupérée.'
    res.status(200).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'La liste de tout les membres n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

};

exports.findMembre = (req, res, next) => {

  models.Membre.findAll({
    where:{
      role: "membre",
      isActive: true
    }
  })
  .then(membres => {
    const message = 'La liste des membres à bien été récupérée.'
    res.status(200).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'La liste des membres n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.findStaff = (req, res, next) => {

  models.Membre.findAll({
    where:{
      role: "staff",
      isActive: true
    }
  })
  .then(membres => {
    const message = 'La liste des staff à bien été récupérée.'
    res.status(200).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'La liste des staff n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.findAdmin = (req, res, next) => {

  models.Membre.findAll({
    where:{
      role: "admin",
      isActive: true
    }
  })
  .then(membres => {
    const message = 'La liste des admin à bien été récupérée.'
    res.status(200).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'La liste des admin n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.updateMembre = (req, res, next) => {

    const id = req.params.id

    console.log(req.body)
    console.log(req.headers)

    models.Membre.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      models.Membre.findByPk(id).then(membre => {
        const message = `Le membre ${membre.name} a bien été modifié.`
        res.status(201).json({message, data: membre })
      })
      .catch(error => {
        const message = 'Le membre n\'a pas pu être modifié. Réessayer dans quelques instant.'
        res.status(500).json({ message, data: error})
      })
    })
    .catch(error => {
      const message = 'Le membres n\a pas pu être modifié.'
      res.status(500).json({ message, data: error})
    })

}

exports.deleteMembre = (req, res, next) => {

  const id = req.params.id

  models.Membre.findByPk(req.params.id).then(membre => {
    const membreDeleted = membre;
    models.Membre.destroy({
      where: { id: membre.id }
    })
    .then(_ => {
      const message = `Le membre ${membreDeleted.name} avec l'identifiant n°${membreDeleted.id} a bien été supprimé.`
      res.json({message, data: membreDeleted })
    })
    .catch(error => {
      const message = 'Le membre n\'as pas pu être supprimé'
      res.status(500).json({ message, data: error})
    })
  })

}