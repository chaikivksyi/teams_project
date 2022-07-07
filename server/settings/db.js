const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGO_URI;
db.users = require("./../models/user.model")(mongoose);
// db.products = require("./product.model.js")(mongoose);
module.exports = db;