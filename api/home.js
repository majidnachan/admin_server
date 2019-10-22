const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    res.json({success : 'Authenticated'});
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

