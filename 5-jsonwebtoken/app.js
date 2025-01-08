const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const main= require('./routes/main')


// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1',main)
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000;
const start = async () => {
  try {
    app.listen(port);
  } 
  catch (error) {
    console.log(error);
  }
};

start();