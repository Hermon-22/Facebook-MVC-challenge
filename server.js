// IMPORTING
const express = require('express');
const router = require('./config/router');
require('./config/mongoose');

// creating app
const app = express()

// encode the form
app.use(express.urlencoded({ extended: true }))

// static for the public folder
app.use(express.static('public'))

// import the router 
app.use(router)

//set ejs as static 
app.set('view engine', 'ejs') 




// Listen to the port
app.listen(4455, () => console.log(`listening to port 4455`))