const express = require('express');
const path = require('path');
const logger = require('morgan');
const router = require('./routes');
const mongoose = require('mongoose');
const nunjucks = require('nunjucks');
const events = require('events');
events.EventEmitter.defaultMaxListeners = 20;


const app = express();
mongoose.connect('mongodb://127.0.0.1/gpt_db').then(() => console.log('Database Connected!')).catch((err) => console.log('Database Connection Error:', err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(router);
nunjucks.configure('views',{
    autoescape:true,
    express: app
});

app.set('view engine','html');

module.exports = app;
