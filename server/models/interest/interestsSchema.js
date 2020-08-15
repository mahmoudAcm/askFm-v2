const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InerestsSchema = new Schema({
    userId:{
        type:mongoose.Types.ObjectId,
    },
    interestedIn:{
        type:String,
        trim:true
    }
},{
    timestamps:true
});

module.exports = InerestsSchema;
