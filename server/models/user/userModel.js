const mongoose = require('mongoose');
const UserSchema = require('./userSchema');
const Interest = require('../interest/interestsModel');
const Follower = require('../follower/followerModel');
const validator = require("validator").default;
const bcrypt = require('bcrypt');
const { bcryptKey } = require('../../config/keys');

UserSchema.statics.register = async function (email, password) {
    return new Promise((resolve, reject) => {
        try {
            let User = this;
            let userTagName = "", fullName = "";

            fullName = email.split("@")[0];

            for (let name of fullName) {
                if (validator.isAlphanumeric(name)) userTagName += name;
            }

            bcrypt.hash(password, bcryptKey.salt, async (err, hash) => {
                const user = new User({
                    email,
                    fullName,
                    userTagName,
                    password: hash
                });
                await user.save();
                delete user._doc.password;
                resolve(user);
            });
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
}

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

UserSchema.methods.verifyPassword = function (password){
  const user = this ;
  return new Promise((resolve, reject) => {
      bcrypt.compare(password, user._doc.password, (err, res) => {
           resolve(res);
      });
  })
}

const User = mongoose.model('user', UserSchema);

module.exports = User ;