const express = require('express');
const router = express.Router();

router.use('/', require(BASEPATH + '/api/home'));
router.use('/login', require(BASEPATH + '/api/login'));

module.exports = router;