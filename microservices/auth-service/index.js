const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(`Received login request for username: ${username} and password: ${password}`);
    res.json({ message: 'Login successful (this is a fake response)' });
});

app.listen(5006, () => {
    console.log('AuthService running on port 5006');
});
