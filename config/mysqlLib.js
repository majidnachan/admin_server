

async function executeQuery(mysqlQuery,params){
	console.log(mysqlQuery);
	//console.log(params);
    
    const util = require('util');
    const query = util.promisify(CONNECTION.query).bind(CONNECTION);
        
    try {
        return await query(mysqlQuery,params);
    }catch(err){
        console.log(err);
        console.error(err.code +' | '+ err.sqlMessage);
    }
}

module.exports = {
	executeQuery : executeQuery
}