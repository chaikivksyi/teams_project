const express = require("express");
const path = require("path");
const cors = require("cors");
require('dotenv').config()

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
    res.send([
        {
            id: 1,
            title: 'test'
        },
        {
            id: 2,
            title: 'test 2'
        }
    ])
})

app.get('/', (req, res) => {
    res.send('Server working!')
})

const db = require("./settings/db");
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







const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}.`);
});