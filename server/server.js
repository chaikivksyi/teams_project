const express = require("express");
// const path = require("path");
const cors = require("cors");
// const cookieparser = require('cookie-parser')
require('dotenv').config()

const app = express();
app.use(express.json())
app.use(cors());
// app.use(cookieparser())

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