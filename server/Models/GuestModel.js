const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const guestSchema = new mongoose.Schema({
    username: {
        type: String,
        default: "Guest",
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

module.exports = mongoose.model("Guest", guestSchema);