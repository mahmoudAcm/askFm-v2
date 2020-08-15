const router = require('express').Router();
const Ask = require('../models/ask-post/askModel');

router.post('/:id', async (req, res) => {
    try{
        const askPost = new Ask({
            userId: req.params.id,
            ...req.body
        });
        
        await askPost.save();

        res.send({
            askPost,
            message: "Question created successfuly"
        });

    } catch(err){
        res.send({
            message: err
        });
    }
});

router.delete('/:id', async (req, res) => {
    try{
        await Ask.findByIdAndDelete(req.params.id);
        res.send({
            message: "Question deleted successfuly"
        });
    } catch(err){
        res.send({
            message: err
        })
    }
});

//get all posts of user :id
router.get('/:id', async (req, res) => {
    try{
        const posts = await Ask.find({userId: req.params.id});
        res.send({
            posts,
            message: "all posts are here"
        });
    } catch(err){
        res.send({
            message: err
        })
    } 
});

module.exports = router;