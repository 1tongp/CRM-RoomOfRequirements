const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// required information for order
var OrderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },

    status: {
        type: String,
        default: 'pending',
    },

    detail:{
        type: String,
        default: null
    },

    type: {
        type: String,
        default: '',
        require: true
    },

    expireDate: {
        type: Date,
        default: Date.now,
        require: true
    }

}, { timestamps: { createdAt: 'createTime', updatedAt: 'updateTime' }});

module.exports = mongoose.model("Order",OrderSchema);

