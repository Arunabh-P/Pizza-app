const express = require('express');
const morgan = require('morgan');
require('colors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV;
const connectDb = require('./config/config');
const app = express();
const pizzaRouter = require('./routes/pizzaRouter');
//database
connectDb();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//route
app.use('/api/pizzas', pizzaRouter);

app.listen(PORT, () => {
  console.log(
    `Server is running ${NODE_ENV} mode on port no ${PORT}`.bgWhite.black
  );
});
