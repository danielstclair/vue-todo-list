const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

app.use('/', express.static('public'));

const host = (process.env.VCAP_APP_HOST || '0.0.0.0');
const port = (process.env.VCAP_APP_PORT || 3000);

app.listen(port, host, () => {
  console.log('application started successfully');
  console.log('port', port);
});
