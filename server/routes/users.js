const router = require('express').Router();
const authCtrl = require('./../controllers/users.controller')

router.post('/register',authCtrl.register);

router.post('/login',authCtrl.login);

router.post('/logout',authCtrl.logout);

router.post('/refresh_token',authCtrl.generateAccessToken);

router.get('/user/:username', authCtrl.getUser);

module.exports = router;