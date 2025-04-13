const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // CORS middleware to handle cross-origin requests

const app = express();

// Ensure the uploads folder exists
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath);
}

// Middleware to handle CORS if frontend and backend are on different ports
app.use(cors());

// Set up file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsPath); // Files will be stored in the uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Use a unique name for each file
  },
});

const upload = multer({ storage: storage });

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(uploadsPath));

app.get('/', (req, res) => {
  res.send('Welcome to the ByteVerse server!');
});

// File upload route (correct the endpoint to match the frontend's fetch URL)
app.post('/uploads', upload.single('file'), (req, res) => {
  if (req.file) {
    res.status(200).send('File uploaded successfully');
  } else {
    res.status(400).send('No file uploaded');
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
