const express = require('express');
const TeamRouter = express.Router();

var teamController = require('../controllers/teamController');

// POST request to create a team
TeamRouter.post('/create', teamController.TeamCreatePost);

// GET request to get team details
TeamRouter.get('/:teamNumber', teamController.teamListGet);

// POST request to change the team details
TeamRouter.post('/changeDetails/:teamNumber', teamController.teamChangePost);

// GET request to get team details
TeamRouter.get('/teamid/:id', teamController.teamDetailGet);

module.exports = TeamRouter;