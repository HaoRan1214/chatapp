// microservices/file-upload-service/index.js

const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors()); // 启用 CORS

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    res.status(201).send({ filePath: `uploads/${req.file.filename}` });
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // 暴露 uploads 目录

app.get('/files/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);
    res.sendFile(filePath);
});

app.listen(5002, () => {
    console.log('File upload service running on port 5002');
});
