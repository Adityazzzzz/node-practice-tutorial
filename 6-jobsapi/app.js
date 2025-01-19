const helmet = require('helmet')
const cors= require('cors')
const xssclean= require('xss-clean')
const ratelimit= require('express-rate-limit')

const express = require('express');
const app = express();
require('dotenv').config();
require('express-async-errors');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const connectDB= require('./db/connect')

const Authentication= require('./middleware/authentication')
const jobs= require('./routes/jobs')
const auth= require('./routes/auth')



app.use(ratelimit({
  windowMs: 15*60*100,
  max:100
}));

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xssclean());




app.use('/api/v1/jobs',Authentication,jobs)
app.use('/api/v1/auth',auth)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5000;
const start = async () => {
  try{
    await connectDB(process.env.MONGO_URL)
    app.listen(port)
  } 
  catch(error){
    console.log(error);
  }
};

start();