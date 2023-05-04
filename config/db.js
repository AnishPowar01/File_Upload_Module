const mongoose = require("mongoose");

require("dotenv").config();

// exports.connectWithDb = () =>{

// }

const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("Database is Connected"))
    .catch((error) => {
      console.log("database connection failular");
      console.log(error);

      process.exit(1);
    });
};

module.exports = connectWithDb;
