const express = require('express');
const morgan = require('morgan');
require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const connectDb = require('./config/config');
const app = express();

//database
connectDb();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//route
app.get('/', (req, res) => {
  res.send('<h1>hello</h1>');
});

app.listen(PORT, () => {
  console.log(
    `Server is running ${NODE_ENV} mode on port no ${PORT}`.bgWhite.black
  );
});
