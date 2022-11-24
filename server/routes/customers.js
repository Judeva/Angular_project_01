var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const { findById } = require('../models/customers.model');

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



/* POST customer */
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



/* PATCH customer*/
router.patch('/edit/:userId', function(req, res, next) {

    console.log(req.params.userId + "   params id"); //ok


    let userId = req.params.userId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let emailAddress = req.body.emailAddress;
    let phoneNumber = req.body.phoneNumber;
    let department = req.body.department;

    let customerObj = {

        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        department,
    }


    console.log(customerObj.firstName + '  obj-to');

    customerModel.findByIdAndUpdate(userId, customerObj, function(err, customerRes) {

        console.log(userId);

        if (err) {
            res.send({ status: 500, message: 'Unable to update the customer' });
        } else {
            console.log("Hi!")
            res.send({ status: 200, results: customerRes, message: 'Customer updated successfully' });
        }
    })
});

/* DELETE customer*/
router.delete('/delete:userId', function(req, res, next) {


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



/* GET ONE customer. */
router.get('/view/:userId', (req, res, next) => {

    console.log('req params :' + req.params.userId);

    customerModel.findById({ _id: req.params.userId })
        .then(data => {
            console.log(data + ' 144')
            res.send(data)

        })
        .catch(err => console.log('this error:  ' + err));

});
module.exports = router;