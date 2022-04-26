const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    phoneNumber: String,
    dob: String
})

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;