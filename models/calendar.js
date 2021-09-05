const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CalendarSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
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
    visibililty: {
        type: String,
        default: 'Private'
    },

    // 0900AM == 09:00, 1345PM == 13:45
    startTime:{
        type: String,
    },

    // 0900AM == 09:00, 1345PM == 13:45
    endTime:{
        type:String,
    },

    // MM/DD/YYYY
    dateYear:{
        type: String,
    }

});

module.exports = mongoose.model("Calendar", CalendarSchema);