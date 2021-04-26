// Require

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');


// Routes

const userRoutes = require('./routes/users');
const membreRoutes = require('./routes/membres');
const jeuRoutes = require('./routes/jeux');
const PostRoutes= require('./routes/posts');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images/membres', express.static(path.join(__dirname, 'images/membres')));

app.get('/', async(req, res) => {
    
    res.status(200).send("Hello World")
})

app.use('/api', PostRoutes);
app.use('/api/auth', userRoutes);
app.use('/api', membreRoutes);
app.use('/api', jeuRoutes);

module.exports = app;
