const router = require("express").Router();
const isLoggedIn = require('../middlewares');

/* GET main page */
router.get("/main", isLoggedIn, (req, res, next) => res.render("protected/main",req.session.currentUser));

/* GET private page */
router.get("/private", isLoggedIn, (req, res, next) =>  res.render("protected/private",req.session.currentUser));

module.exports = router;
