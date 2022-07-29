const mongoose = require("mongoose");

const DB = "mongodb+srv://gaurav:ghosh@realestate.lr3uu.mongodb.net/real_estate?retryWrites=true&w=majority";
connectDB().then(()=>{console.log("connected to database!")}).catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(DB);
}

module.exports = connectDB;
