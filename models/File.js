const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const FileSchema = new mongoose.Schema({
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

// Single post middleware
FileSchema.post("save", async function (doc) {
  try {
    console.log("DOC->", doc);

    // Check if email exists before sending
    if (!doc.email) {
      console.log("No email provided, skipping email notification.");
      return;
    }

    // Create Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587, // Use 465 for SSL, 587 for TLS
      secure: false, // true for 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: `"File Upload" <${process.env.MAIL_USER}>`,
      to: doc.email,
      subject: "New file uploaded to Cloudinary",
      html: `<h2>Hi,</h2> <p>Your file has been uploaded successfully.</p> check here <a href="${doc.imageUrl}">Your image</a>`,
    });

    console.log("Email sent: ", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
});

const File = mongoose.model("File", FileSchema);
module.exports = File;
