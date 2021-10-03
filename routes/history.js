const express = require('express');
const historyRouter = express.Router();

var historyController = require('../controllers/historyController');

historyRouter.get('/:id', historyController.historyGet);

historyRouter.post('/create', historyController.customerHistoryCreatePost);

historyRouter.get('/list/:customerId', historyController.historyListGet);

module.exports = historyRouter;