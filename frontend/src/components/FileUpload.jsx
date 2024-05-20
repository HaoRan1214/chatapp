// frontend/src/components/FileUpload.jsx

import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5002/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log('File uploaded:', data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default FileUpload;
