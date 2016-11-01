const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();
mongoose.connect('localhost:27017/vue-todo');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/', express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/new', routes);

const host = (process.env.VCAP_APP_HOST || '0.0.0.0');
const port = (process.env.VCAP_APP_PORT || 3000);

app.listen(port, host, () => {
  console.log('application started successfully');
  console.log('port', port);
});
