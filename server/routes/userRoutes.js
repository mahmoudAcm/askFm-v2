const router = require('express').Router();
const User = require('../models/user/userModel');

/*Creating user*/
router.post('/', async (req, res) => {
    try{
        const user = new User({...req.body});
        await user.save();
        res.status(201).send({
            Profile: await User.getProfile(user._id),
            message: 'User created successfully'
        });
    } catch(err){
        res.send({
            message: err
        });
    }
});

router.delete('/:userId', async (req, res) => {
    const message = await User.deleteProfile(req.params.userId);
    res.send({
        message:'User has been deleted'
    });
});

router.get('/:userId', async (req, res) => {
    try{
        const userProfile = await User.getProfile(req.params.userId);
        res.status(200).send({
            profile: userProfile,
            message: ' '
        });
    } catch(err){
        res.send({
            message: err
        });
    }
});

router.put('/:userId', async (req, res) => {
    try{
        const userProfile = await User.updateUser(req.params.userId, req.body);
        res.send({
            Profile: userProfile,
            message: 'User updated successfuly'
        });
    } catch(err){
        res.send({
            message: err
        });
    }
});

module.exports = router;