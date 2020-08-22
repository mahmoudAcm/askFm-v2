const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user/userModel");
const validator = require("validator").default;

router.post('/register', async (req, res) => {
   try {

       const { email } = req.body ;

       let userTagName = "", fullName = "";

       fullName = email.split("@")[0];

       for(let name of fullName){
           if(validator.isAlphanumeric(name)) userTagName += name;
       }

       const user = new User({
           email,
           userTagName,
           fullName
       });

       await user.save();

       res.send({user});
   } catch (err) {
       res.send({err});
   }
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/error' }), (req, res) => {
    res.send('hi');
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send("you have been logged out");
})

module.exports = router;