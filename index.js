const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
require('dotenv').config();
const app = express();

//middleware to parse JSON request
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const PORT = 5000;

app.listen(PORT, () => console.log('Server is running on port 5000'));