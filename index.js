const express = require("express");

const fileUpload = require("express-fileupload");
// app created
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// start  the server
app.listen(process.env.PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});

// db connected
const dbConnect = require("./config/db");
dbConnect();

// middleware add
app.use(express.json());
app.use(fileUpload());

// cloud connect

const cloudinary = require("./config/cloudinary");

cloudinary.cloudinaryConnect();

// api route mounte

const upload = require("./routes/fileUpload");
app.use("/api/upload", upload);
