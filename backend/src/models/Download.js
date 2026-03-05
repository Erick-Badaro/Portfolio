const mongoose = require("mongoose");

const downloadSchema = new mongoose.Schema({
    date:{
        type: Date,
        default: Date.now,
    },
    userAgent:{
        type: String
    },
});

module.exports = mongoose.model("Download", downloadSchema);