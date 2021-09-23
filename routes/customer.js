const express = require('express');
const CustomerRouter = express.Router();

var customerController = require('../controllers/customerController');

// POST request to register as a customer
CustomerRouter.post('/create',customerController.customerCreatePost);

// GET request to get customer details
CustomerRouter.get('/:id', customerController.customerDetailGet);

// GET request to get all customer's for a specific staff
CustomerRouter.get('/list/:staffId', customerController.customerListGet);

// GET request to get all customers that in the particular age
CustomerRouter.get('/filterAge/:staffId', customerController.customerAgeFilterGet);

// GET request to get all customers that in the particular gender
CustomerRouter.get('/filterGender/:staffId', customerController.customerGenderFilterGet);

// GET request to get all customers by searching their first name
CustomerRouter.get('/searchName/:staffId', customerController.customerNameSearchGet);

// POST request to update or change details for the cuistomer  
CustomerRouter.post('/update/:customerId', customerController.customerChangePost);

// GET request to get all customers that currently no assigned staff
CustomerRouter.get('/nostaff/:staffId', customerController.customerNoStaffGet);

// GET request to get the number of customers
CustomerRouter.get('/number/:staffId', customerController.customerNumberGet);

// GET request to get the n partial information of customers
CustomerRouter.get('/show/:staffId', customerController.customerPartialGet);

// POST request to update/add the insurance
CustomerRouter.post('/update/insurance/:customerId', customerController.customerInsuranceUpdate);

// POST request to update/delete the insurance
CustomerRouter.post('/delete/insurance/:customerId', customerController.customerInsuranceDelete);
module.exports = CustomerRouter;