// Require

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');


// Routes

const userRoutes = require('./routes/users');
const membreRoutes = require('./routes/membres');
const jeuRoutes = require('./routes/jeux');
const user = require('./models/user');

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

app.post('/posts', async(req, res) => {
    const { userId, title, status, content } = req.body

    try {
        const user = await models.User.findOne({ where: { id: userId}})

        const post = await models.Post.create({ title, status, content, userId: user.id, isActive: true })

        return res.json(post)

    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.get('/posts', async(req, res) => {

    try {

        const posts = await models.Post.findAll({
            include: [{
                model: models.User,
                attributes: [ 'id', 'email', 'name'],
            }]
        })

        return res.json(posts)

    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
})

app.use('/api/auth', userRoutes);
app.use('/api', membreRoutes);
app.use('/api', jeuRoutes);

module.exports = app;
