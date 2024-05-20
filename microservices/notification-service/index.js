const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // 引入 cors 中间件
const Notification = require('./models/notification');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // 启用 CORS

mongoose.connect('mongodb://localhost:27017/notifications');

app.post('/notify', async (req, res) => {
    const { userId, message } = req.body;
    const notification = new Notification({ userId, message });
    await notification.save();
    res.status(201).send(notification);
});

app.get('/notifications/:userId', async (req, res) => {
    const { userId } = req.params;
    const notifications = await Notification.find({ userId });
    res.send(notifications);
});

app.listen(5001, () => {
    console.log('Notification service running on port 5001');
});
