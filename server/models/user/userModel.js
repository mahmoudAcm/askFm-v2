const mongoose = require('mongoose');
const UserSchema = require('./userSchema');
const Interest = require('../interest/interestsModel');
const Follower = require('../follower/followerModel');

UserSchema.statics.deleteProfile = async function (userId){
    const user = this ;
    const found = await user.findByIdAndDelete(userId);
    if(found){
      await Interest.deleteMany({userId});
      await Follower.deleteMany({userId});  
      return `User ${found.username} is Deleted`;  
    } else {
      return "No user with such id";
    }
};

UserSchema.statics.getProfile = async function (userId){
  var user = this ;
  try{
    // console.log(Interest);
    return {
      user: await user.findById(userId),
      interests: await Interest.find({userId}),
      followers: await Follower.find({userId})
    };
  } catch(e){
    console.log(e);
  }
}

UserSchema.statics.updateUser = async function (userId, updatedData){
  const user = this ;
  const profileData = await user.findById(userId);
  const keys = Object.keys(updatedData);
  keys.forEach((key) => {
    profileData[key] = updatedData[key];
  });
  return await profileData.save();
}


const User = mongoose.model('user', UserSchema);

module.exports = User ;