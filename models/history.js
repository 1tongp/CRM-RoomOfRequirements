const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// required information for order
var HistorySchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },
    insuranceType:{
        type: String
    },

    date: {
        type: String,
        default: '2021-01-01',
    },
    
    note: {
        type: String,
        default: '',
        require: true
    },




}, { timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }});

module.exports = mongoose.model("History",HistorySchema);
