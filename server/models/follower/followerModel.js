const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const followerModel = new Schema({
  userId:{
      type:mongoose.Types.ObjectId
  },
  following:{
      type:mongoose.Types.ObjectId,
      unique:true
  }
},{
    timestamps:true
});

const Follower = mongoose.model('follower', followerModel);

module.exports = Follower;