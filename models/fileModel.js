const mongoose = require("mongoose");

const fileScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  email: {
    type: String,
  },
});

const File = mongoose.model("File", fileScheme);

module.exports = File;
