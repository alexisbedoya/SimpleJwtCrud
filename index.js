'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const environment = require('./environments');
const winston = require('winston');
const app = express();

require('./startup/config')();
require('./startup/db')();
require('./startup/logging')();
require('./startup/validation')();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(environment.port, ()=>winston.info('App listening on url:'+environment.port));


