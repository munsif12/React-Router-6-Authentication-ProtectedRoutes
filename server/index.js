//setup a basic express server
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send("Welcome Home ")
});


app.post('/api/v1/sendToken', function (req, res) {
    const { username, password } = req.body;
    jwt.sign({ username, password }, 'secretkey', (err, token) => {
        return res.json({
            token
        })
    });
});


app.listen(5000, () => {
    console.log(":: Server is running on port 5000");
});


