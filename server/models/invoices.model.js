const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({

    invoiceNumber: Number,
    invoiceAmount: Number,
    invoiceIssueDate: Date,
    invoiceStatus: String,

})

const invoiceModel = mongoose.model('Invoice', invoiceSchema);

module.exports = invoiceModel;