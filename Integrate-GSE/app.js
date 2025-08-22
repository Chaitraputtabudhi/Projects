const express = require('express');
const logger = require('morgan');
const router = require('./routes');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
mongoose.connect('mongodb://127.0.0.1/google_db').then(() => console.log("Database Connected Successfully.")).catch((err) => console.log("Database Connection error.",err));
nunjucks.configure('views',{
    autoescape:true,
    express: app
});

app.set('view engine','html')

module.exports = app;
