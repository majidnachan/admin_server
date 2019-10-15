const express = require('express');
const router = express.Router();

router.get('/', async function (req, res, next) {
  try {
    res.send('success');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

