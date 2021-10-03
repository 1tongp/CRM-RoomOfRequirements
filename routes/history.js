const express = require('express');
const historyRouter = express.Router();

var historyController = require('../controllers/historyController');

// GET request to get history based on the history id
historyRouter.get('/:id', historyController.historyGet);

// POST request to create/record customer history
historyRouter.post('/create', historyController.customerHistoryCreatePost);

// GET request to get a list of history for a particular customer
historyRouter.get('/list/:customerId', historyController.historyListGet);

module.exports = historyRouter;