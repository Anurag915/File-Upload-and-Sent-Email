# File Upload & Email Notification System

## Overview
This project is a **file upload system** that allows users to upload files, store metadata in a MongoDB database, and send an email notification upon a successful upload. It is built using **Node.js, Express, MongoDB, and Nodemailer**.

## Features
- Upload files and store metadata
- Save file details (name, URL, tags, email) in MongoDB
- Automatically send an email notification when a file is uploaded
- Uses **Nodemailer** for email handling

## Technologies Used
- **Node.js** – Backend server
- **Express.js** – Web framework
- **MongoDB & Mongoose** – Database and ODM
- **Nodemailer** – Email sending
- **dotenv** – Environment variable management

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/file-upload-email.git
   cd file-upload-email
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```sh
   MONGO_URI=your_mongodb_connection_string
   MAIL_HOST=smtp.your-email-provider.com
   MAIL_USER=your-email@example.com
   MAIL_PASSWORD=your-email-password
   ```
4. **Run the server**
   ```sh
   node server.js
   ```

## API Endpoints
### 1. **Upload a Local File**
   **Endpoint:** `POST https://file-upload-and-sent-email.onrender.com/api/v1/localFileUpload`
   - **Description:** Uploads a local file.

### 2. **Upload an Image**
   **Endpoint:** `POST https://file-upload-and-sent-email.onrender.com/api/v1/imageUpload`
   - **Description:** Uploads an image to storage.

### 3. **Upload a Video**
   **Endpoint:** `POST https://file-upload-and-sent-email.onrender.com/api/v1/videoUpload`
   - **Description:** Uploads a video to storage.

### 4. **Reduce Image Size**
   **Endpoint:** `POST https://file-upload-and-sent-email.onrender.com/api/v1/imageSizeReducer`
   - **Description:** Reduces the size of an image.

## Nodemailer Email Notification
When a file is uploaded, an email notification is sent to the provided email address. The email content includes:
- Subject: "New File Uploaded"
- Body: "Your file has been uploaded successfully."

## Error Handling
- Handles missing required fields
- Logs email sending errors

## Future Enhancements
- Support for multiple file uploads
- Implement file storage using AWS S3 or Cloudinary
- Improve email templates with HTML styling

## License
This project is licensed under the **MIT License**.

---

### Author
**Anurag Prajapati**  
_An aspiring software developer specializing in MERN stack and Java full-stack development._
