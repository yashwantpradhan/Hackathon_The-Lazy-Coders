// import React, { useState } from 'react';
// import './DocumentUpload.css';

// const DocumentUpload = () => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [uploadStatus, setUploadStatus] = useState('');

//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     setUploadStatus('');
//   };

//   const handleUpload = () => {
//     if (!selectedFile) {
//       setUploadStatus('Please select a file first.');
//       return;
//     }

//     // Simulate file upload
//     setTimeout(() => {
//       setUploadStatus('✅ Document uploaded successfully!');
//     }, 1000);
//   };

//   return (
//     <div className="document-upload-container">
//       <h2>📄 Upload Your Document</h2>
//       <input
//         type="file"
//         className="file-input"
//         onChange={handleFileChange}
//       />
//       <button className="upload-btn" onClick={handleUpload}>
//         Upload
//       </button>
//       {uploadStatus && <p className="status-message">{uploadStatus}</p>}
//     </div>
//   );
// };

// export default DocumentUpload;

import React, { useState } from 'react';
import axios from 'axios';
import './DocumentUpload.css';

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setUploadStatus('');
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('document', selectedFile);
    formData.append('userId', 'YOUR_USER_ID'); // Replace with actual user ID from context/auth

    try {
      const response = await axios.post('http://localhost:5000/api/users/upload-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('✅ Document uploaded successfully!');
      console.log(response.data);
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message);
      setUploadStatus('❌ Upload failed. Try again.');
    }
  };

  return (
    <div className="document-upload-container">
      <h2>📄 Upload Your Document</h2>
      <input type="file" className="file-input" onChange={handleFileChange} />
      <button className="upload-btn" onClick={handleUpload}>Upload</button>
      {uploadStatus && <p className="status-message">{uploadStatus}</p>}
    </div>
  );
};

export default DocumentUpload;


