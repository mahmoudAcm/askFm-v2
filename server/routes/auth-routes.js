const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user/userModel");

router.post('/register', async (req, res) => {
   try {
       const { email, password } = req.body ;
       const user = await User.register(email, password);

       res.send({user});
   } catch (err) {
       res.send({err});
   }
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/error' }), (req, res) => {
    res.send({message:'hi'});
});

router.get('/logout', (req, res) => {
    req.logout();
    res.send("you have been logged out");
})

module.exports = router;