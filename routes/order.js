const express = require('express');
const orderRouter = express.Router();

var orderController = require('../controllers/orderController');

// POST request for staff to create a new order
orderRouter.post('/create', orderController.customerOrderCreatePost);

// GET request for staff to get the orders list under a specific status
orderRouter.get('/:staffId', orderController.OrderListGet);

// POST request for vendor to change the orders' status 
orderRouter.post('/change/:id', orderController.orderChangePost)

// GET request to search orders
orderRouter.get('/search/:id', orderController.orderListGet);

// GET request to filter orders
orderRouter.get('/filter/:staffId', orderController.orderFilterGet);

// GET request to search customers
orderRouter.get('/customerorder/:customerId', orderController.OrderCustomerGet);

// GET request to get the type of orders
orderRouter.get('/customertype/:customerId', orderController.OrderCustomerTypeGet);

// GET request to get the number of orders
orderRouter.get('/num/:staffId', orderController.OrderNumGet);

module.exports = orderRouter;