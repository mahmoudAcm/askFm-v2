const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: {
        type: String,
        default: ''
    },
    userTagName: {
        type: String,
        default: '',
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    googleId:{
        type: String,
        default: ''
    },
    mood:{
        type: String,
        default: ''
    },
    online_status:{
        type: String,
        default: 'online'
    },
    location:{
        type: String,
        default: ''
    },
    gender:{
        type: String
    },
    email:{
        type: String,
        required:true,
        unique: true
    },
    bio:{ 
        type: String,
        default: ''
    },
    wallet:{
        type: String,
        default: ''
    },
    backgroundImage: {
        type: String,
        default: 'https://d1muxuiltlupn6.cloudfront.net/assets/profile-bg-853324ad1cb1a0bbc62244f1854403cfe21ddb5bd45fd2595d018734c80daac7.png'
    },
    userImage: {
        type: String,
        default: 'https://d1muxuiltlupn6.cloudfront.net/assets/noAvatar-c233d6098087425dfeea8f690fd936de6b3cb2dc9fda991b0a5051169d334399.png'
    }
});

module.exports = UserSchema;