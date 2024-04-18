// backend/routes/user.js
const express = require('express');
const zod = require("zod");

const router = express.Router();

const signupSchema = zod.object({
    username: zod.string().email(),
    firstname: zod.string(),
    lastname: zod.string(),
    password: zod.string()

})



module.exports = router;