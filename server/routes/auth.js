const router = require('express').Router();
const authCtrl = require("../controllers/users.controller");

router.post('/register',authCtrl.register);

router.post('/login',authCtrl.login);

router.post('/logout',authCtrl.logout);

router.post('/refresh_token',authCtrl.generateAccessToken);

module.exports = router;

// http://localhost:5005/users/register     POST  [username, fullname, email, password]
// http://localhost:5005/users/login     POST  [email, password]
// http://localhost:5005/users/logout