const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var TeamSchema = new Schema({
    teamNumber:{
        type: Number,
        required: true,
    },

    fileList:{
        type: Array,
        required: true,
        default: []
    },

    TeamMemberList: {
        type: Array,
        required: true,
        default: []
    },

});

module.exports = mongoose.model("Team",TeamSchema);