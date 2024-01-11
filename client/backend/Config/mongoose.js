const mongoose = require('mongoose');

const connectDB = async() => {
    try{
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`Connection successfull ${mongoose.connection.host}`)
    } catch(error){
        console.log(`Database connection error ${error}`)
    }
}

module.exports = connectDB ;