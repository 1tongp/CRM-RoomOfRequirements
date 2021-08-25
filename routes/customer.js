const express = require('express');
const CustomerRouter = express.Router();

var customerController = require('../controllers/customerController');

// POST request to register as a customer
CustomerRouter.post('/create',customerController.customerCreatePost);

// GET request to get customer details
CustomerRouter.get('/:id', customerController.customerDetailGet);


module.exports = CustomerRouter;