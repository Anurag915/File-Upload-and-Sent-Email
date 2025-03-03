//app route
const express = require("express");
const app = express();

//port find karo
require("dotenv").config();
const port = process.env.PORT || 4000;

//middleware add karo
app.use(express.json());

//middle ware for file upload
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//db se connect karo
const db = require("./config/database");
db.connect();

//cloud se connect karo
const cloudinary = require("./config/cloudinay");
cloudinary.cloudinaryConnect();

//api route mount karn hai
const upload = require("./routes/FileUpload");
app.use("/api/v1", upload);

//activate server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.get("/",(req,res)=>{
  res.send("hello world");
});