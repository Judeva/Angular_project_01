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

    let customerObj = new customerModel({

        firstName: "Lisa",
        lastName: "Twain",
        emailAddress: "gmail@mail.com",
        phoneNumber: "0879654123",
        dob: '01-05-2022',
        department: 'DEP'
    })

    customerObj.save(function(err, customerObj) {

        if (err) {
            res.send({ status: 500, message: 'Unable to create customer' });
        } else {
            res.send({ status: 200, message: 'Customer created.', customerDetails: customerObj });
        }

    })


});

/* PUT customer*/
router.put('/edit', function(req, res, next) {
    const userId = req.query.userId;

    let customerObj = {

        firstName: "PALisa",
        lastName: "Brown",
        emailAddress: "gmail@mail.com",
        phoneNumber: "08787887878",
        dob: '01-05-2022',
        department: 'DEP'
    };

    customerModel.findByIdAndUpdate(userId, customerObj, function(err, customerRes) {

        console.log(userId);

        if (err) {
            res.send({ status: 500, message: 'Unable to update the customer' });
        } else {
            res.send({ status: 200, results: customerRes });
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