const express = require('express');
const StaffRouter = express.Router();

var staffController = require('../controllers/staffController');

// POST request to register as a customer
StaffRouter.post('/register', staffController.staffRegisterPost);

// GET request to get customer details
StaffRouter.get('/:id', staffController.staffDetailGet);

// POST request to change the customer details
StaffRouter.post('/changeDetails/:id', staffController.staffChangeDetailsPost);

// POST request to change the customer details
StaffRouter.post('/changeTeam/:id', staffController.staffChangeTeamPost);

// POST request to login as customer
StaffRouter.post('/login', staffController.staffLoginPost);

// POST request to login without hash 
StaffRouter.post('/login/unhash', staffController.staffLoginUnhashPost);

// GET request to get team members
StaffRouter.get('/member/:teamId', staffController.teamMemberGet);

// // GET request to get the statisics of staff selling rranking
// StaffRouter.get('/statistic/:teamId', staffController.staffRankingGet);

// GET request to get team members
StaffRouter.post('/number/:id', staffController.orderNumUpdate);

StaffRouter.get('/', staffController.staffGet);
module.exports = StaffRouter;