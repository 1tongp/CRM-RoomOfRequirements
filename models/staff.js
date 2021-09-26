const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// required information for 
var StaffSchema = new Schema({
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
    givenName:{
        type: String,
        required: true,
    },
    familyName:{
        type: String,
        required: true,
    },
    photoPath:{
        type: String,
    },
    loginEmail:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    companysuburb:{
        type: String,
    },

    location:{
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates:{
            type: [Number]
        }
    },
    address:{
        type: String,
        required: true,
    },

});

module.exports = mongoose.model("Staff",StaffSchema);