const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CalendarSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },

    events: {
        notes: Array,
        type: String
    }, 
});

module.exports = mongoose.model("Calendar", CalendarSchema);