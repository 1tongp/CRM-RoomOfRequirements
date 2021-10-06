const express = require('express');
const orderRouter = express.Router();

var orderController = require('../controllers/orderController');

// POST request for staff to create a new order
orderRouter.post('/create', orderController.customerOrderCreatePost);

// GET request for staff to get the orders list under a specific status
orderRouter.get('/:staffId', orderController.OrderListGet);

// POST request for vendor to change the orders' status 
orderRouter.post('/change/:id', orderController.orderChangePost)

// GET request for customer to get their all order details
// orderRouter.get('/', orderController.customerOrderListGet);

orderRouter.get('/search/:id', orderController.orderListGet);

orderRouter.get('/filter/:staffId', orderController.orderFilterGet);

orderRouter.get('/customerorder/:customerId', orderController.OrderCustomerGet);

orderRouter.get('/customertype/:customerId', orderController.OrderCustomerTypeGet);

orderRouter.get('/num/:staffId', orderController.OrderNumGet);

module.exports = orderRouter;