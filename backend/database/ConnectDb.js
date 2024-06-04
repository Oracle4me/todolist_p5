// Connect to Mongoose
const mongoose = require('mongoose')
mongoose.set("strictQuery", false);

async function ConnectDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connect to Database")
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = ConnectDb; 
