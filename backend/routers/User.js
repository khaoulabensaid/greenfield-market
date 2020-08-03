const express = require('express');
const users = express.Router();
const userControl = require('../controllers/User')


users.get('/',userControl.signin)
users.post('/register',userControl.signup)
users.post('/login',userControl.login)
users.get('/events',userControl.events)
users.get('/special',userControl.special)

module.exports = users;