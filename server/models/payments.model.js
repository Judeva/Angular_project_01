const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({

    paymentNumber: Number,
    paymentAmount: Number,
    paymentIssueDate: Date,
    paymentStatus: String,

})

const paymentModel = mongoose.model('Payment', paymentSchema);

module.exports = paymentModel;