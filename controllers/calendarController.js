const Calendar = require('../models/calendar');

// POST request to create an event
exports.eventCreatePost = function(req, res){
    const{staff, event, type, visibility, startTime, endTime, team} = req.body;

    const newEvent = new Calendar({
        staff,
        event,
        type,
        visibility,
        startTime,
        endTime,
        team
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

// GET request to get the all events for a particular staff
exports.eventListGet = function(req, res){
    Calendar.find({staff: req.params.staffId, visibility: req.query.visibility},function(err, eventsList){
        if(eventsList.length === 0){
            res.status(200).json({success: false, message: "No events"})
        }
        else{
            var eventsLists = []
            for(i = 0; i < eventsList.length; i++){
                eventsLists.push({
                    "title": eventsList[i].event,
                    "start": eventsList[i].startTime,
                    "end":eventsList[i].endTime,
                    "team": eventsList[i].team,
                    "visibility": eventsList[i].visibility,
                    "staff":eventsList[i].staff,
                    "id": eventsList[i].id,
                    "staffName":''
                })
            }
            res.status(200).json({success: true, events: eventsLists})
        }
    })
}

// GET request to get the all team's events that the visibility is 'Public' 
exports.eventTeamGet = function(req, res){
    Calendar.find({team: req.params.teamId, visibility: req.query.visibility},function(err, eventsList){
        if(eventsList === []){
            res.status(200).json({success: false, message: "No events"})
        }
        else{
            var eventsLists = []
            for(i = 0; i < eventsList.length; i++){
                eventsLists.push({
                    "title": eventsList[i].event,
                    "start": eventsList[i].startTime,
                    "end":eventsList[i].endTime,
                    "team": eventsList[i].team,
                    "visibility": eventsList[i].visibility,
                    "staff":eventsList[i].staff,
                    "id": eventsList[i].id,
                    "staffName":''
                })
            }
            res.status(200).json({success: true, events: eventsLists})
        }
    })
}

// GET request to delete the event
exports.eventDeleteGet = function(req, res){
    Calendar.findByIdAndDelete(req.params.id,function(err, event){
        if(!event){
            res.status(200).json({success: false, message: "Event Not Found"})
        }
        else{
            res.status(200).json({success: true, message:"Deleted"})
        }
    })
}
