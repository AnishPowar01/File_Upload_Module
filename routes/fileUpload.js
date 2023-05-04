const express = require("express");

const router = express.Router();

const {
  imageUpload,
  videoUpload,
  imageReducerUpload,
  localFileUpload,

} = require("../controllers/FileUpload");


// api route

// router.post("/imageUpload",imageUpload);
// router.post("/videoUpload", videoUpload);

router.post("/localFile", localFileUpload);

module.exports = router