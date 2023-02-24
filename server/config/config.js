const mongoose = require('mongoose');
require('colors');

const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URI;
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(url);
    console.log(`database connected! ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`error : ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
