const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("File aagyi jee->", file);
    let path =
      __dirname + "/files/" + Date.now() + `.` + `${file.name.split(".")[1]}`;
    file.mv(path, (err) => {
      console.log("Error->", err);
    });
    res.json({
      success: true,
      message: "File uploaded successfully",
    });
  } catch (err) {
    console.log("Error->", err);
  }
};

function isFileTypeSupported(fileType, supportedTypes) {
  return supportedTypes.includes(fileType);
}
async function uploadFileToCloudinay(file, folder,quality) {
    try {
      const response = await cloudinary.uploader.upload(file.tempFilePath, {
        folder: folder,
        resource_type: "auto",
        use_filename: true,
        quality:quality,
      });
      return response; // Returns Cloudinary response object
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      throw error; // Ensure error handling in the calling function
    }
  }
  

exports.imageUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);
    const file = req.files.imageFile;
    console.log("File aagyi jee->", file);
    //validation
    const supportedTypes = ["jpg", "jpeg"];
    const fileType = file.name.split(".")[1].toLowerCase();
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }
    //file format supported hai
    console.log("file type supported");
    const response = await uploadFileToCloudinay(file, "TestingCloudinary");
    console.log("Response->", response);
    //db mai entry save karni hai
    const fileData = await File.create({
      name,
      imageUrl: response.secure_url,
      tags,
      email,
    });
    res.json({
      success: true,
      message: "File uploaded successfully",
      data: fileData,
    });
  } catch (err) {
    console.log("Error->", err);
    console.log("can not able to upload");
  }
};

exports.videoUpload = async (req, res) => {
  try {
    const { name, tags, email } = req.body;
    console.log(name, tags, email);
    const file = req.files.videoFile;
    console.log("File aagyi jee->", file);
    //validation
    const supportedTypes = ["mp4", "mov"];
    const fileType = file.name.split(".")[1].toLowerCase();
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported",
      });
    }
    //file format supported hai
    console.log("file type supported");
    const response = await uploadFileToCloudinay(file, "TestingCloudinary");
    console.log("Response->", response);
    //db mai entry save karni hai
    const fileData = await File.create({
      name,
      imageUrl: response.secure_url,
      tags,
      email,
    });
    res.json({
      success: true,
      message: "File uploaded successfully",
      data: fileData,
    });
  } catch (err) {
    console.log("Error->", err);
    console.log("can not able to upload");
  }
};


exports.imageSizeReducer = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        console.log(name, tags, email);
        const file = req.files.imageFile;
        console.log("File aagyi jee->", file);
        //validation
        const supportedTypes = ["jpg", "jpeg"];
        const fileType = file.name.split(".")[1].toLowerCase();
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: "File type not supported",
            });
        }
        //file format supported hai
        console.log("file type supported");
        const response = await uploadFileToCloudinay(file, "TestingCloudinary",10);
        console.log("Response->", response);
        //db mai entry save karni hai
        const fileData = await File.create({
            name,
            imageUrl: response.secure_url,
            tags,
            email,
        });
        res.json({
            success: true,
            message: "File uploaded successfully",
            data: fileData,
        });
    }
    catch (err) {
        console.log("Error->", err);
        console.log("can not able to upload");
    }
    };
    