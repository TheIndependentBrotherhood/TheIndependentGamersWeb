// Require

const bcrypt = require('bcrypt');
const jwtUtils = require('../middleware/auth');
const models = require('../models');
const asyncLib = require('async');
const fs = require('fs');
const multer = require('multer');

exports.createMembre = async  (req, res) => {
  try {
    // console.log(req.file);

    let nameSend = req.body.name;
    let pictureSend = `http://localhost:3000/images/membres/${req.file.filename}`;
    let roleSend = req.body.role;

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }

    models.Membre.create({
      name: nameSend,
      picture: pictureSend,
      role: roleSend,
      isActive: true
    })

    models.Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        "http://localhost:3000/images/membres/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        "http://localhost:3000/images/tmp/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

exports.findMembreList = (req, res, next) => {

  models.Membre.findAll()
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
      role: "membre"
    }
  })
  .then(membres => {
    const message = 'La liste des membres à bien été récupérée.'
    res.status(400).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'La liste des membres n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.findStaff = (req, res, next) => {

  models.Membre.findAll({
    where:{
      role: "staff"
    }
  })
  .then(membres => {
    const message = 'La liste des membres à bien été récupérée.'
    res.status(400).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'La liste des staff n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.findAdmin = (req, res, next) => {

  models.Membre.findAll({
    where:{
      role: "admin"
    }
  })
  .then(membres => {
    const message = 'La liste des membres à bien été récupérée.'
    res.status(400).json({ message, data: membres })
  })
  .catch(error => {
    const message = 'La liste des admin n\'a pas pu être récupérée. Réessayer dans quelques instant.'
    res.status(500).json({ message, data: error})
  })

}

exports.updateMembre = (req, res, next) => {

    const id = req.params.id

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