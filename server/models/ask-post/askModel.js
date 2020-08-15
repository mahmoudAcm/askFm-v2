const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const askSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId
    },
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Ask = mongoose.model('Ask', askSchema);

module.exports = Ask ;