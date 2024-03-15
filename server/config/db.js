const mongoose = require('mongoose');
const colors=require('colors');
// Define a function using module.exports
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Use process.env.MONGO_URI
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

// Export the connectDB function using module.exports
module.exports = connectDB;


