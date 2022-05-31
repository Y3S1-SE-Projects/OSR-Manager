const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

const student = mongoose.model('Student', StudentSchema);

module.exports = student;