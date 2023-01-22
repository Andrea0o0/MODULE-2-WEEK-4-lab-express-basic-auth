const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares');

/* GET users listing. */
router.get('/profile', isLoggedIn, function (req, res, next) {
  const user = req.session.currentUser;
  res.render('profile', user);
});



module.exports = router;