const express = require('express');
const authController = require('../controller/authController');
const router = express.Router();

router.get('/signin', authController.signIn);
router.get('/signout', authController.signOut);
router.post('/redirect', authController.handleRedirect);

// router.get('/updateProfile', authProvider.acquireToken({
//     scopes: ['User.Read',"User.ReadWrite", "User.ReadBasic.All",],
//     redirectUri: REDIRECT_URI,
//     successRedirect: '/users/updateProfile'
// }));

module.exports = router;
