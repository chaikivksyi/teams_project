const router = require('express').Router();
const authCtrl = require('./../controllers/users.controller')

router.post('/register',authCtrl.register);

router.post('/login',authCtrl.login);

router.post('/logout',authCtrl.logout);

router.post('/refresh_token',authCtrl.generateAccessToken);

router.get('/users', authCtrl.getAllUser);

router.get('/user/:username', authCtrl.getUser);

router.post('/users/new_friend', authCtrl.addFriend);

router.post('/users/remove_friend', authCtrl.removeFriend);

module.exports = router;