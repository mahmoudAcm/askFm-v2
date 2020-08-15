const router = require('express').Router();
const Friend = require('../models/friend/friendModel');
const User = require('../models/user/userModel');

//first user request the second user 
router.post('/:first_user/friend_request/:second_user', async (req, res) => {
    try{

        const friend = new Friend({
            first_user: req.params.first_user,
            second_user: req.params.second_user 
        });

        await friend.save();

        res.send({
            message: 'request has been sent successfuly'
        });

    } catch (err){
        res.send({
            message: err
        });
    } 
});

//delete the connection bettween two users
router.delete('/:id', async (req, res) => {
    try{
        await Friend.findByIdAndDelete(req.params.id);
        res.send({
            message: "request has been successfuly applied"
        });
    } catch(err){
        res.send({
            message: err
        });
    }
});

//get all users
router.get('/:id', async (req, res) => {
    try{
        const first_part = await Friend.find({
           first_user: req.params.id,
           request: true
        });

        const second_part = await Friend.find({
            second_user: req.params.id,
            request: true
        });

        var friends = [...first_part, ...second_part];

        for(let i = 0 ; i < friends.length; i++){
            if(friends[i]._doc.first_user != req.params.id){
                friends[i]._doc.user = await User.findById(friends[i]._doc.first_user);
            } else if(friends[i]._doc.second_user != req.params.id){
                friends[i]._doc.user = await User.findById(friends[i]._doc.second_user);
            }
            delete friends[i]._doc.first_user;
            delete friends[i]._doc.second_user;
        }

        res.send({
            friends,
            message: 'recievd successfuly'
        });
        
    } catch(err){
        res.send({
            message: err
        });
    }
});

module.exports = router;