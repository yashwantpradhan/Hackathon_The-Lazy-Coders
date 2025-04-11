// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const dotenv = require('dotenv');
// const userRoutes = require('./routes/userRoutes'); 

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/welfare-platform', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log('MongoDB connected'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Multer - Uploads folder config
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
// });
// const upload = multer({ storage });

// // Routes
// app.use('/api/schemes', require('./routes/schemeRoutes'));
// app.use('/api/users', userRoutes); // 

// // Document upload endpoint
// app.post('/upload-doc', upload.single('document'), (req, res) => {
//   res.json({ filePath: req.file.path });
// });

// // Root route
// app.get('/', (req, res) => {
//   res.send('Unified Welfare Platform API is running...');
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/welfare-platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose schema and model for uploaded documents
const documentSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
});

const Document = mongoose.model('Document', documentSchema);

// Multer - memory storage for storing file buffer in MongoDB
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
app.use('/api/schemes', require('./routes/schemeRoutes'));
app.use('/api/users', userRoutes);

// Document upload endpoint (saves to MongoDB)
app.use('/api/users', userRoutes);


// Root route
app.get('/', (req, res) => {
  res.send('Unified Welfare Platform API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

