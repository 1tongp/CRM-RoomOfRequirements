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

    visibililty: {
        type: String,
        default: 'Private'
    },

    startTime:{
        type: String,
    },

    endTime:{
        type:String,
    },

    // MM/DD/YYYY
    dateYear:{
        type: String,
    }

});

module.exports = mongoose.model("Calendar", CalendarSchema);