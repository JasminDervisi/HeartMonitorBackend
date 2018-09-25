const express = require('express');
let bodyParser = require('body-parser');
const app = express();
const config = require('./config');
let Users = require('./users');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(config.Mongo_URI);

let db = mongoose.connection;

//Første endepunkt
app.get('/', (req, res) => {
    res.send("Bruk /api/v1/")
});

app.post('/api/v1/user', (req, res) => {
    let user = req.body;
    Users.addUsers(user, (err, callback) => {
        if(err) throw err;
        res.json(user);
    });
});

app.get('/api/v1/user', (req, res) => {
    Users.getUsers((err, user) => {
        if(err) throw err;
        res.json(user);
    })
});


let port = process.env.PORT || 3000;
app.listen(port);