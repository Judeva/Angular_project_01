const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    dob: String,
    department: String
})


module.exports = mongoose.model('Customer', customerSchema);