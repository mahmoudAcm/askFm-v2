const router = require('express').Router();
const passport = require('passport');

//auth with google
router.get('/google', passport.authenticate("google", {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate("google"), (req, res) => {
    res.redirect('/Interest/drawing');
});

module.exports = router;