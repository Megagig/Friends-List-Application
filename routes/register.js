const express = require('express');
const registers = require("../controllers/registers");
const registerRouter = express.Router();

registerRouter.post('/', registers)

module.exports = registerRouter;