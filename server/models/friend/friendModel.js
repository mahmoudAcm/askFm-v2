const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    request:{
        type: Boolean,
        default: false
    },
    first_user: {
        type: mongoose.Types.ObjectId
    },
    second_user: {
        type: mongoose.Types.ObjectId
    }
}, {
    timestamps: true
});

const Friend = mongoose.model('Freinds', FriendSchema);

module.exports = Friend;