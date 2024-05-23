const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let chatEnabled = true;

app.get('/toggle-chat', (req, res) => {
    chatEnabled = !chatEnabled;
    res.json({ chatEnabled });
});

app.get('/chat-status', (req, res) => {
    res.json({ chatEnabled });
});

app.listen(5005, () => {
    console.log('Chat toggle service running on port 5005');
});
