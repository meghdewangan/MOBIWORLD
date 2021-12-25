const express = require('express');
const router = express.Router();
const passport = require('passport');
const {User} = require('../../db/models/userModel');
const { AdModel } = require('../../db/models/adModel');

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})


router.post('/login', passport.authenticate('local'), (req, res, next) => {
	console.log("hitting this route");
	console.log(req.user);
	res.json({ user: req.user });
	// res.send(req.user)
	

  });



// SignUp Form POST
router.post('/signup', (req, res) => {
	console.log(req.body);
	const { username, password,email } = req.body
	// ADD VALIDATION
	User.findOne({ 'username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'username': username,
			'password': password,
			'email':email
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
});


// Logout User
router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid') // clean up!
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
});

module.exports = router