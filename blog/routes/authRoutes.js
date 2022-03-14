const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');

//SignUp Form
router.get('/register', (req, res) => {
    res.render('auth/signup');
});

//Register the new user in the database
router.post('/register', async (req, res) => {

    try{
        const { username, email, password } = req.body;

        const user = new User({ 
            username: username,
            email: email
        });

        await User.register(user, password);

        req.flash('success', `Welcome ${ username }, Please login to continue.`);
        res.redirect('/blogs');
    }

    catch(e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
});

//Get the login page
router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }), (req, res) => {
        const { username } = req.user;
        req.flash('success', `Welcome ${ username }`);
        res.redirect('/blogs');
    }
);

router.get('/logout', (req, res) => {
    req.logout();

    req.flash('success', 'Successfully logged out');
    res.redirect('/login');
});

module.exports = router;