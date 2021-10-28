const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// required information for customer
var CustomerSchema = new Schema({
    staff: {
        type: Schema.Types.ObjectId,
        ref: 'Staff',
        default: null
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
    location:{
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates:{
            type: [Number]
        }
    },
    region:{
        type: String,
        required: true,
    },

    insurance:{
        type: Array,
        required: true,
    },
    photo:{
        type:String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpddaAqIioNaVv7FrCvZj5m-6PFoLwlQKIhA&usqp=CAU"
    }
}, { timestamps: {createdAt: 'createTime', updateAt: 'updateTime'}});

module.exports = mongoose.model("Customer",CustomerSchema);