const Calendar = require('../models/calendar');

// POST request to create an event
exports.eventCreatePost = function(req, res){
    const{staff, event, type, visibility, startTime, endTime, dateYear} = req.body;

    const newEvent = new Calendar({
        staff,
        event,
        type,
        visibility,
        startTime,
        endTime,
        dateYear
    });

    newEvent.save(function(err, eve){
        if(err){
            res.status(400).json({err});
        }
        else {
            res.status(200).json({message:"created a new event", eventNew: eve});

        }
    })   
}

// POST request to edit/change an event
exports.eventEditPost = function(req, res){

    Calendar.findById(req.params.eventId, function(err, eventDetail){
        if(!eventDetail){
            res.status(404).send("Event is not found!")
        }
        else{
            Calendar.findByIdAndUpdate(
                req.params.eventId,
                req.body,
                {new: true},
                function(err, newEvent){
                    if(err){
                        res.status(404).json({success: false, err})
                    }
                    else{
                        res.status(200).json({success: true, changedEvent: newEvent})
                    }
                })    
        }
    })
}

// GET request to get the event based on the date and time
exports.eventDetailGet = function(req, res){
    Calendar.find({staff: req.params.staffId, dateYear: req.query.dateYear},function(err, eventsList){
        if(eventsList.length === 0){
            res.status(200).json({success: false, message: "No events"})
        }
        else{
            res.status(200).json({success: true, events: eventsList})
        }
    })
}