const mongoose = require('mongoose');

const auditSchema = mongoose.Schema({

    invoiceNumber: Number,
    invoiceAmount: Number,
    invoiceIssueDate: Date,
    invoiceStatus: String,

})

const auditModel = mongoose.model('Audit', auditSchema);

module.exports = auditModel;