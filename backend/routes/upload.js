const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
const router = express.Router();

// Setup multer storage
const storage = multer.memoryStorage(); // store file in memory (or use diskStorage)
const upload = multer({ storage });

// Mongoose schema
const DocumentSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
});

const Document = mongoose.model('Document', DocumentSchema);

// Upload endpoint
router.post('/upload', upload.single('document'), async (req, res) => {
  try {
    const file = new Document({
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      data: req.file.buffer,
    });

    await file.save();
    res.status(200).send({ message: 'File uploaded successfully!' });
  } catch (error) {
    console.error('Error saving file:', error);
    res.status(500).send({ message: 'Upload failed' });
  }
});

module.exports = router;
