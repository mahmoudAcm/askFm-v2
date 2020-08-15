const router = require('express').Router();
const Interest = require('../models/interest/interestsModel');

router.post('/', async (req, res) => {
    try{
        const interest = new Interest({
            ...req.body
        });
        await interest.save();
        res.send({
            interest: interest,
            message: `${interest.interestedIn} has been added successfuly`
        });
    } catch(err){
        res.send({
            message: err
        });
    }
});  

router.delete('/:id', async (req, res) => {
    try{
        await Interest.findByIdAndDelete(req.params.id);
        res.send({
            message: 'deleted successfuly'
        });
    } catch(err){
        res.send({
            message: err
        })
    }
});

router.get('/:userId', async (req, res) => {
    try{
        const UserInterests = await Interest.find({userId: req.params.userId});
        res.send({
            interests: UserInterests,
            rows: UserInterests.length,
            message: ' '
        });
    } catch(err){
        res.send({
            message: err
        })
    }
});


module.exports = router;