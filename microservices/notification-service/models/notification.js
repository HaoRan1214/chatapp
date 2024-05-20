// microservices/notification-service/models/notification.js

const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
