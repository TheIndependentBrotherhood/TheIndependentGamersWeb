// Require

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');


// Routes

const userRoutes = require('./routes/users');
const membreRoutes = require('./routes/membres');
const jeuRoutes = require('./routes/jeux');
const postRoutes= require('./routes/posts');
const messageRoutes= require('./routes/messages');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images/membres', express.static(path.join(__dirname, 'images/membres')));
app.use('/images/jeux', express.static(path.join(__dirname, 'images/jeux')));

app.get('/', function(req, res){
    res.redirect('https://www.theindependentgamers.fr/');
  });

app.use('/api/auth', userRoutes);
app.use('/api', membreRoutes);
app.use('/api', jeuRoutes);
app.use('/api', postRoutes);
app.use('/api', messageRoutes);

module.exports = app;
