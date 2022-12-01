const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.get('/usuario', userController.showUser);

router.get('/usuario/:id', userController.showUserOne)


router.post('/usuario', userController.store);

module.exports = router;