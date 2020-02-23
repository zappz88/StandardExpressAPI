//server
require('dotenv').config();

const express = require('express');
const app = express();
const hostName = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 5000;

app.listen(port, hostName);

app.use(express.json());

module.exports = app;
