const File = require("../models/fileModel");

const cloudinary = require("cloudinary").v2;

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

// image upload handler

const isFileTypeSupported = (type, supportedType) => {
  return supportedType.includes(type);
};

const uploadFile = async (file, folder) => {
  const options = { folder };

  return await cloudinary.uploader.upload(file.tempFilePath, options);
};

exports.imageUpload = async (req, res) => {
  try {
    // fetch data
    const { name, tags, email } = req.body;

    console.log(name, tags, email);

    const file = req.files.imageFile;
    console.log(file);

    // validation

    const supportedType = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".")[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedType)) {
      return res.status(400).json({
        success: false,
        message: "file Format not support",
      });
    }
     
    // code is getting error here
    const response = await uploadFile(file, "Demo");
    console.log(response);

    // create a db entry

    const fileData = await File.create({
      name,
      tags,
      email,
      imageUrl : response.secure_url,
    });

    res.json({
      success: true,
      imageUrl : response.secure_url,
      message: "Image uploaded Successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
