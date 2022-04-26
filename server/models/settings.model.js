const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({

    paymentNumber: Number,
    paymentAmount: Number,
    paymentIssueDate: Date,
    paymentStatus: String,

})

const settingsModel = mongoose.model('Settings', settingsSchema);

module.exports = settingsModel;