const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    leader: {
        type: String,
        required: true
    },
    member2: {
        type: String,
        required: true
    },
    member3: {
        type: String,
        required: true
    },
    member4: {
        type: String,
        required: true
    },
    supervisor:{
        type: String,
        default: null
    },
    co_supervisor:{
        type: String,
        default: null
    }
});

const group = mongoose.model("Group", GroupSchema);

module.exports = group;
