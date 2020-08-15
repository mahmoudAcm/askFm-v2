const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    googleId:{
        type:String,
        default: ''
    },
    mood:{
        type:String,
        default: ''
    },
    online_status:{
        type:String,
        default: ''
    },
    location:{
        type:String,
        default: ''
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true
    },
    bio:{ 
        type:String,
        default: ''
    },
    wallet:{
        type:String,
        default: ''
    }
});

module.exports = UserSchema;