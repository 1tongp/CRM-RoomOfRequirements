const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// required information for customer
var CustomerSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },
    givenName:{
        type: String,
        required: true,
    },
    familyName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    dateOfBirth:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },

}, { timestamps: {createdAt: 'createTime', updateAt: 'updateTime'}});

module.exports = mongoose.model("Customer",CustomerSchema);