// backend/routes/user.js
const express = require('express');
const zod = require("zod");

const router = express.Router();

const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstname: zod.string(),
    lastname: zod.string()

})

module.exports = router;