const Team = require('../models/team');

// POST request for customer order create
exports.TeamCreatePost = function (req, res) {
    const { teamNumber, fileList, staff } = req.body;

    Team.findOne({ teamNumber: teamNumber }).then((team) => {
        if (team) {
            res.status(409).send("This Team Number has already registered!");
        }
        else {
            // create a new order
            const newTeam = new Team({
                teamNumber,
                fileList,
                staff               
            });

            // save new team's data
            newTeam.save(function (err, result) {
                if (err) {
                    res.status(400).json({ err });
                }
                else {
                    res.status(200).json({ message: "created a new order", result: result });
                }
            })
        }
    })  
}


// POST request to change the team details for staff
exports.teamChangePost = function(req, res){

    // check validation of the team id
    Team.find({staff: req.params.staff}, function(err, teamDetail){
        
        if(!teamDetail){
            res.status(404).send("team is not found!")
        }
        else{

            // update the team member and file link
            Team.findOneAndUpdate(
                {teamNumber: req.params.teamNumber},
                req.body,
                {new: true},
                function(err, changeTeamDetails){
                    if(err){
                        res.status(404).json({success: false, err})
                    }
                    else{
                        res.status(200).json({success: true, changeTeamDetails: changeTeamDetails})
                    }
                })    
        }
    })
}

// GET request for vendor to search orders
exports.teamListGet = function(req, res){

    // check validation of the order id
    Team.findOne({teamNumber: req.params.teamNumber}, function(err, team){
        if(!team){
            res.status(404).json({success: false, message: "team is not found!"})
        }
        else{
            res.status(200).json({success: true, team: team})   
        }
    })
}