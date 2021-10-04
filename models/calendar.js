const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CalendarSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },

    event: {
        type: String,
        default: '',
    }, 

    type: {
        type: String,
        default: ''
    },
    
    // {enum:{Private, Public}}
    visibility: {
        type: String,
        default: 'Private'
    },

    // 0900AM == 09:00, 1345PM == 13:45
    startTime:{
        type: String,
    },

    endTime:{
        type:String,
    },

    name:{
        type:String,
    }

});

module.exports = mongoose.model("Calendar", CalendarSchema);