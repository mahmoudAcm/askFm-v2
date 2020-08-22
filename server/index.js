const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const userRoutes = require('./routes/userRoutes');
const interestRoutes = require('./routes/interestRoutes');
const followerRoutes = require('./routes/followerRoutes');
const friendRoutes = require('./routes/friendRoutes');
const askRoutes = require('./routes/askRoutes');

const path = require('path');
const authRoute = require('./routes/auth-routes');
const passport = require("passport");
require('./config/passport-setup');
const cookieSession = require('cookie-session');


//connect to DB
mongoose.connect(keys.mongodb.DB_URL,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
},(err) => {
    if(err) {
        return;
    }
    console.log('connected to dataBase!');
});

const app = express();
const PORT = process.env.PORT || 3001 ;

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys:['testmeforever']
}));


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
});

app.use(authRoute);
app.use('/Interest', interestRoutes);
app.use('/Follower', followerRoutes);
app.use('/Friend', friendRoutes);
app.use('/User', userRoutes);
app.use(askRoutes);

app.get('/error', (req, res) => {
    res.send('something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});