import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import api from './api';

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

module.exports = app;
