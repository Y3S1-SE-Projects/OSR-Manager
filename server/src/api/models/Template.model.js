const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
    file_name: {
        type: String,
        required: true
    },
    file_link: {
        type: String,
        required: true
    },
    updated_date: {
        type: Date,
        default: Date.now
    }
});

const template = mongoose.model('Template', TemplateSchema);

module.exports = template;