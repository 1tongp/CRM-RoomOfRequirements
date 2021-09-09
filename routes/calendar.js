const express = require('express');
const CalendarRouter = express.Router();

var calendarController = require('../controllers/calendarController');

// POST request to create an event in calendar
CalendarRouter.post('/create', calendarController.eventCreatePost);

// POST request to edit an exist event
CalendarRouter.post('/edit/:eventId', calendarController.eventEditPost);

// GET request to get the events based on date and time
CalendarRouter.get('/find/:staffId', calendarController.eventDetailGet);

// GET request to get the events based on date and time
CalendarRouter.get('/show/:staffId', calendarController.eventListGet);
module.exports = CalendarRouter;