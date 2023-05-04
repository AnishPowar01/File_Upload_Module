const File = require("../models/fileModel");

// localfile upload handler function
exports.localFileUpload = async (req, res) => {
  try {
    // file fetch

    const file = req.files.file;
    console.log(file);

    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`;

    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "Local file uploeded Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Dard Dukh Tanhai",
    });
  }
};
