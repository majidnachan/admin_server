/* Include Packages */
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors')

/* Middleware */
const middleware = require(BASEPATH + '/config/middleware.js');
app.use(middleware.mysqlConnection);
//app.use(middleware.isValidUser);
app.use(bodyParser.json());
app.use(cors());

/* Initialize the Routes */
const routes = require(BASEPATH + '/routes/routes.js');
app.use('/', routes);

module.exports = app;

