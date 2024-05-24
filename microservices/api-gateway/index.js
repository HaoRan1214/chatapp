const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const proxy = httpProxy.createProxyServer();

const services = {
    'auth-service': 'http://localhost:5006',
    'notification-service': 'http://localhost:5001',
    'file-upload-service': 'http://localhost:5002',
    'emoji-service': 'http://localhost:5004'
};

app.all('/auth/*', (req, res) => {
    proxy.web(req, res, { target: services['auth-service'] });
});

app.all('/notify/*', (req, res) => {
    proxy.web(req, res, { target: services['notification-service'] });
});

app.all('/upload/*', (req, res) => {
    proxy.web(req, res, { target: services['file-upload-service'] });
});

app.all('/emoji/*', (req, res) => {
    proxy.web(req, res, { target: services['emoji-service'] });
});

app.listen(4000, () => {
    console.log('API Gateway running on port 4000');
});
