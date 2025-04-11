const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { registerUser, loginUser, uploadDocument } = require('../controllers/userController');

// Multer config
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/upload-document', upload.single('document'), uploadDocument);

module.exports = router;
