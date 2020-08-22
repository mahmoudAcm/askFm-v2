const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const askSchema = new Schema({
    author: {
        type: mongoose.Types.ObjectId
    },
    text: {
        type: String
    }
}, {
    timestamps: true
});

const Ask = mongoose.model('AskPost', askSchema);

module.exports = Ask ;