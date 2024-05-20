const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const sensitiveWords = JSON.parse(fs.readFileSync('sensitive-words.json', 'utf8'));

const filterMessage = (message) => {
    let filteredMessage = message;
    sensitiveWords.forEach(word => {
        const regex = new RegExp(word, 'gi');
        filteredMessage = filteredMessage.replace(regex, '*'.repeat(word.length));
    });
    return filteredMessage;
};

app.post('/filter', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    const filteredMessage = filterMessage(message);
    res.json({ filteredMessage });
});

app.listen(5003, () => {
    console.log('Filter service running on port 5003');
});
