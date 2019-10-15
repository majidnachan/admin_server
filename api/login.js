const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// This is the order confirmation API
router.get('/', async function (req, res, next) {
  try {
  	const mysql = require(BASEPATH + '/config/mysqlLib');

  	let postParams = req.query;
  	const queryData = await mysql.executeQuery('SELECT * FROM admin_users WHERE user_name = ? AND user_password = ?', [postParams.userName,postParams.password]).then((value) => { return value });
    
    if (Object.keys(queryData).length > 0) {
    	let token = jwt.sign({ "username": postParams.userName }, "MySuperSecretPassPhrase", { algorithm: 'HS256'});
    	res.json({'error':false,'message':'Success','data' : {'token':token,'userName':postParams.userName}});  
    }else{
    	res.json({'error':true,'message':'User not found','data' : {'token':'','userName': ''}});  
    }
    
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;

