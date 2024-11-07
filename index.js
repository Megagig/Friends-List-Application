const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session')
const mongoose = require('mongoose');
const registerRouter = require("./routes/register");
require('dotenv').config();
const app = express();

//middleware to parse JSON request
app.use(express.json());

//middleware to handle session

//connect to the mongodb database
mongoose.connect(process.env.MONGODB_URI, {}).then(() => {
	console.log('Connected to the database');
}).catch((err) => {
	console.log('Error connecting to the database', err);
});

//routes
app.use('/api/v1/register', registerRouter);

const PORT = 5000;

app.listen(PORT, () => console.log('Server is running on port 5000'));