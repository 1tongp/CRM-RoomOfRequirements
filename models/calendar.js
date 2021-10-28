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
    
    visibility: {
        type: String,
        default: 'Private'
    },

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