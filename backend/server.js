const express = require("express");
const app = require('./app');
const path= require('path');
const multer = require('multer');

const PORT = process.env.PORT || 3000;
// const storage = multer.diskStorage({
//   destination: "./src/assets/img",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
// const fileFilter = (req, file, cb) => {
//   if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({ storage: storage, fileFilter: fileFilter });

app.listen(PORT, () => {
  console.log("Server running on port: " , PORT);
 });