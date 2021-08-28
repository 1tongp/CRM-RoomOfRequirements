const express = require('express');
const CustomerRouter = express.Router();

var customerController = require('../controllers/customerController');

// POST request to register as a customer
CustomerRouter.post('/create',customerController.customerCreatePost);

// GET request to get customer details
CustomerRouter.get('/:id', customerController.customerDetailGet);

// GET request to get all customer's for a specific staff
CustomerRouter.get('/list/:staffId', customerController.customerListGet);


module.exports = CustomerRouter;