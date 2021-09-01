const express = require('express');
const StaffRouter = express.Router();

var staffController = require('../controllers/staffController');

// POST request to register as a customer
StaffRouter.post('/register', staffController.staffRegisterPost);

// GET request to get customer details
StaffRouter.get('/:id', staffController.staffDetailGet);

// POST request to change the customer details
StaffRouter.post('/changeDetails/:id', staffController.staffChangeDetailsPost);

// POST request to login as customer
StaffRouter.post('/login', staffController.staffLoginPost);

// POST request to login without hash 
StaffRouter.post('/login/unhash', staffController.staffLoginUnhashPost);
module.exports = StaffRouter;