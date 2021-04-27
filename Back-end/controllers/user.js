// Require

const bcrypt = require('bcrypt');
const jwtUtils = require('../middleware/auth');
const models = require('../models');
const asyncLib = require('async');
const fs = require('fs');


// Constantes

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,30}$/;


exports.signup = (req, res, next) => {

        // Params

        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password;

        // Conditions

        if (email == null) {
            return res.status(400).json({ 'error': 'Email incorrect' });
        }
        if (name == null) {
            return res.status(400).json({ 'error': 'Pseudo incorrect' });
        }
        if (password == null) {
            return res.status(400).json({ 'error': 'Mot de passe incorrect' });
        }

        if (name.length >= 13 || name.length <= 1) {
            return res.status(400).json({ 'error': 'Pseudo doit contenir au moin 2 caractères et ne doit pas dépasser 12 caractère' });
        }

        if (!EMAIL_REGEX.test(email)){
            return res.status(400).json({ 'error': 'Email n\'est pas valide' });
        }

        if (!PASSWORD_REGEX.test(password)){
            return res.status(400).json({ 'error': 'Le Mot de passe doit être composé au minimum de 4 caractère et doit contenir une majuscule, une minuscule et un chiffre' });
        }

        // Fonction signuo Condition

        asyncLib.waterfall([
            (done) => {
                models.User.findOne({
                    attributes: ['email'],
                    where: { email: email }
                })
                .then(userFound => {
                    done(null, userFound);
                })
                .catch(err => {
                    return res.status(500).json({ 'error': 'Impossible d\'enregistrer l\'utilisateur' });
                });
            },
            (userFound, done) => {
                if (!userFound) {
                    bcrypt.hash(password, 5, (err, hash) => {
                        done(null, userFound, hash);
                    });
                } else {
                    return res.status(409).json({ 'error': 'Cette email existe déja' });
                }
            },
            (userFound, hash, done) => {
                const newUser = models.User.create({
                    name: name,
                    email: email,
                    password: hash,
                    isAdmin: 0
                })
                .then( (newUser) => {
                    done(newUser);
                })
                .catch(err => {
                    return res.status(500).json({ 'error': 'Impossible d\'enregistrer l\'utilisateur' });
                });
            }
        ], (newUser) => {
                if (newUser) {
                    return res.status(201).json({
                        'id': newUser.id,
                        'name': newUser.name
                    });
                } else {
                    return res.status(500).json({ 'error': 'Impossible d\'enregistrer l\'utilisateur' });
                }
            }
        );
};

exports.login = (req, res, next) => {

    //Params

    let email = req.body.email;
    let password = req.body.password;

    // Condition

    if (email == null) {
        return res.status(400).json({ 'error': 'Email incorrect' });
    }
    if (password == null) {
        return res.status(400).json({ 'error': 'Mot de passe incorrect' });
    }

    // Fonction Login condition

    asyncLib.waterfall([
        (done) => {
            models.User.findOne({
                where: { email: email }
            })
            .then((userFound) => {
                done(null, userFound);
            })
            .catch(err => {
                return res.status(500).json({ 'error': 'L\'utilisateur est introuvable' });
            });           
        },
        (userFound, done) => {
            if (userFound) {
                bcrypt.compare(password, userFound.password, (errBycrypt, resBycryt) => {
                    done(null, userFound, resBycryt);
                });
            } else {
                return res.status(404).json({ 'error': 'L\'Utilisateur n\'éxiste pas' });
            }
        },
    (userFound, resBycryt, done) => {
            if(resBycryt) {
                done(userFound);
            } else {
                return res.status(403).json({ 'error': 'Mot de passe incorrect' });
            }
        }
    ], (userFound) => {
        if(userFound) {
            return res.status(200).json({
                'userId': userFound.id,
                'name': userFound.name,
                'email': userFound.email,
                'token': jwtUtils.generateTokenForUser(userFound),
                'isAdmin' : userFound.isAdmin,
            });
        }
        else {
            return res.status(500).json({ 'error': 'Impossible de se connecter' });
        }
    });
};

exports.checkIsLogin = (req, res, next) => {

    const {token} = req.body

    let userId = jwtUtils.getUserId(token);

    if (userId < 0)
        return res.status(400).json({ 'error': 'Mauvais Token' });

    models.User.findOne({
        attributes: [ 'id', 'email', 'name', 'isAdmin'],
        where: { id: userId },
    }).then(function(user) {
        if (user) {
        res.status(201).json(user);
        } else {
        res.status(404).json({ 'error': 'utilisateur introuvable' });
        }
    }).catch(function(err) {
        console.log(err)
        res.status(500).json({ 'error': 'impossible d\'afficher l\'utilisateur' });
    });

};

exports.getUserProfile = (req, res, next) => {
    // Getting auth header
    let headerAuth = req.headers['authorization'];
    let userId = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
        return res.status(400).json({ 'error': 'Mauvais Token' });

    models.User.findOne({
      attributes: [ 'id', 'email', 'name'],
      where: { id: userId },
    }).then(function(user) {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(404).json({ 'error': 'utilisateur introuvable' });
      }
    }).catch(function(err) {
        console.log(err)
      res.status(500).json({ 'error': 'impossible d\'afficher l\'utilisateur' });
    });
};

exports.updateUserProfile = (req, res, next) => {
// Getting auth header
let headerAuth = req.headers['authorization'];
let userId = jwtUtils.getUserId(headerAuth);

console.log(req.body.name);
console.log(req.body.email);
console.log(req.body.password);

asyncLib.waterfall([
    (done) => {
        models.User.findOne({
        attributes: ['id'],
        where: { id: userId }
        }).then( (userFound) => {
            done(null, userFound);
        })
        .catch( (err) => {
            console.log(err)
            return res.status(500).json({ 'error': 'unable to verify user' });
        });
    },
    (userFound, done) => {
        if(userFound) {
        userFound.update({
            email: req.body.email,
            name: req.body.name
        }).then( () => {
            done(userFound);
        }).catch( (err) => {
            res.status(500).json({ 'error': 'cannot update user' });
        });
        } else {
        res.status(404).json({ 'error': 'user not found' });
        }
    },

    ], (userFound) => {
    if (userFound) {
        return res.status(201).json(userFound);
    } else {
        return res.status(500).json({ 'error': 'cannot update user profile' });
    }
    });
};