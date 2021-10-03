const History = require('../models/history');

// POST request to create/record customer history
exports.customerHistoryCreatePost = function(req, res){
    const{customer, staff, insuranceType, date, note} = req.body;

    // create the history
    const newHistory = new History({
        customer,
        staff,
        insuranceType,
        date,
        note 
    });

    // save data
    newHistory.save(function(err, result){
        if(err){
            res.status(400).json({err});
        }
        else {
            res.status(200).json({message:"created a new history", history: result});

        }
    })   
}

// GET request to get history based on the history id
exports.historyGet = function(req, res){

    History.findById(req.params.id, function(err, his){
        if(!his){
            res.status(404).json({success: false, message: "Not Found"})
        }
        else{
            res.status(200).json({success: true, history: his})   
        }
    })
}

// GET request to get a list of history for a particular customer
exports.historyListGet = function(req, res){

    History.find({customer: req.params.customerId}, function(err, his){
        if(!his){
            res.status(404).json({success: false, history: []})
        }
        else{
            var newHis = []
            for(i = 0; i < his.length; i++){
                newHis.push({
                    "staff": "",
                    "orderId": his[i].order,
                    "customerId": his[i].customer,
                    "insuranceType": his[i].insuranceType,
                    "staffId": his[i].staff,
                    "date": his[i].date,
                    "note": his[i].note
                })
            }
            res.status(200).json({success: true, history: newHis})   
        }
    })
}

