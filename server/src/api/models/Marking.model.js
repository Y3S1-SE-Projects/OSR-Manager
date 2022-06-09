const mongoose = require('mongoose');

const MarkingSchema = new mongoose.Schema({
    file_name: {
        type: String,
        required: true
    },
    file_link: {
        type: String,
        required: true
    },
    max_marks: {
        type: Number,
        required: true
    },
    comments: {
        type: String,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

const marking = mongoose.model('Marking', MarkingSchema);

module.exports = marking;