const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const emojis = JSON.parse(fs.readFileSync('emojis.json', 'utf8'));

const convertEmojis = (message) => {
    let convertedMessage = message;
    for (const [keyword, emoji] of Object.entries(emojis)) {
        const regex = new RegExp(keyword, 'g');
        convertedMessage = convertedMessage.replace(regex, emoji);
    }
    return convertedMessage;
};

app.post('/convert', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    const convertedMessage = convertEmojis(message);
    res.json({ convertedMessage });
});

app.listen(5004, () => {
    console.log('Emoji service running on port 5004');
});
