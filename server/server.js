const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require('dotenv').config()

const { hashSync, compareSync } = require('bcrypt');
const UserModel = require('./models/user.model');
const jwt = require('jsonwebtoken');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const db = require("./config/db");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use('', require('./routes'))


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});