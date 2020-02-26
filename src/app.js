const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const initRoutes = require('./routes');
const { logRequest, logResponse, errorHandler } = require('./middlewares');

const app = express();
app.disable('x-powered-by');
app.use(helmet());

app.use(cors());

app.use(bodyParser.json());

logRequest(app);
initRoutes(app);
app.use(errorHandler);
logResponse(app);

module.exports = app;
