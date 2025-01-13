const mongoose = require("mongoose");
require("dotenv").config();
const CONNECT_URI = process.env.MONGO_URI;

const connectToDb = () => {
    mongoose.connect(CONNECT_URI).then(() => console.log("connected to db")).catch((err) => console.log(err, "err"))
};

module.exports = connectToDb