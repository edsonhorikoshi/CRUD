const express = require('express');
const router = express.Router();

const NotFoundController = require('../controllers/NotFoundController');

router.use(NotFoundController.showNotFound);

module.exports = router;