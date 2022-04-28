var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const customerModel = require('../models/customers.model');

/* GET ALL customers listing. */
router.get('/list', function(req, res, next) {

    customerModel.find(function(err, customerListRes) {

        if (err) {
            res.send({ status: 500, message: 'Unable to find customers' });
        } else {
            const recordCount = customerListRes.length;
            res.send({ status: 200, recordCount: recordCount, results: customerListRes });
        }
    })

});

/* GET ONE customer. */
router.get('/view', function(req, res, next) {

    const userId = req.query.userId;

    customerModel.findById(userId, function(err, customerRes) {

        console.log(userId);

        if (err) {
            res.send({ status: 500, message: 'Unable to find the customer' });
        } else {
            res.send({ status: 200, results: customerRes });
        }
    })

});

/* POST customer*/
router.post('/add', function(req, res, next) {


    console.log(req.body);

    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.emailAddress;
    let phoneNumber = req.body.phoneNumber;
    let dob = req.body.dob;
    let department = req.body.department;

    let customerObj = new customerModel({

        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        dob: dob,
        department: department,
    })


    customerObj.save(function(err, customerObj) {

        console.log(customerObj);

        if (err) {
            res.send({ status: 500, message: 'Unable to create customer' });
        } else {
            res.send({ status: 200, message: 'Customer created.', customerDetails: customerObj });
        }

    })


});

/* PUT customer*/
router.put('/edit', function(req, res, next) {

    let userId = req.body.userId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.emailAddress;
    let phoneNumber = req.body.phoneNumber;
    let dob = req.body.dob;
    let department = req.body.department;

    let customerObj = {

        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        dob,
        department,
    }

    customerModel.findByIdAndUpdate(userId, customerObj, function(err, customerRes) {

        console.log(userId);

        if (err) {
            res.send({ status: 500, message: 'Unable to update the customer' });
        } else {
            res.send({ status: 200, results: customerObj });
        }
    })
});

/* DELETE customer*/
router.delete('/delete', function(req, res, next) {


    const userId = req.query.userId;

    customerModel.findByIdAndDelete(userId, function(err, customerRes) {

        console.log(userId);

        if (err) {
            res.send({ status: 500, message: 'Unable to delete the customer' });
        } else {

            res.send({ status: 200, message: 'Customer deleted', results: customerRes });
        }
    })
});

/* SEARCH customers*/
router.get('/search', function(req, res, next) {





});

module.exports = router;