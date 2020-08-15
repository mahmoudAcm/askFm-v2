const router = require('express').Router();
const Follower = require('../models/follower/followerModel');
const User = require('../models/user/userModel');

router.post('/:first_user_id/follow/:second_user_id', async (req, res) => {
    try{
        const follower = new Follower({
            userId: req.params.first_user_id,
            following: req.params.second_user_id
        });

        const user = await User.findById(follower.following);

        await follower.save();
        res.status(201).send({
            message: `You started following ${user.username}`
        });

    } catch(err){
        res.send({
            message: err
        });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        await Follower.findByIdAndDelete(req.params.id);
        res.send({
            message: `Follower has been deleted`
        });
    } catch(err){
        res.send({
            message: err
        });
    }
});

router.get('/:userId', async (req, res) => {
    try{
        var followers = await Follower.find({userId: req.params.userId});
        for(let i = 0 ; i < followers.length; i++){
            const userData = await User.findById(followers[i].following);
            delete followers[i]._doc.userId ;
            followers[i]._doc['following'] = userData;
        }
        res.send({
            followers,
            rows: followers.length,
            message: ' '
        });
    } catch(err){
        res.send({
            message: err
        })
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const AllFollowers = await Follower.find({});
        res.send({
            followers: AllFollowers,
            rows: AllFollowers.length
        });
    } catch(err) {
        res.send({
            message: err
        });
    }
});

module.exports = router;