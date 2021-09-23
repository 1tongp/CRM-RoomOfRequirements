const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TeamSchema = new Schema({

    teamNumber:{
        type: Number,
        required: true,
    },

    fileList:{
        type: String,
        required: true,
        default: null
    },

    
});

module.exports = mongoose.model("Team",TeamSchema);