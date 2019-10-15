

/* [START] Validate User */
function isValidUser(req, res, next) {
    console.log("==Login Middleware==");
    if (typeof req.headers.authorization !== "undefined") {
        // retrieve the authorization header and parse out the
        // JWT using the split function
        let token = req.headers.authorization.split(" ")[1];
        //let privateKey = fs.readFileSync('./private.pem', 'utf8');
        let privateKey = 'MySuperSecretPassPhrase';
        // Here we validate that the JSON Web Token is valid and has been 
        // created using the same private pass phrase
        jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
            
            // if there has been an error...
            if (err) {  
                // shut them out!
                res.status(200).json({ error: "Not Authorized" });
                //throw new Error("Not Authorized");
            }
            // if the JWT is valid, allow them to hit
            // the intended endpoint
            return next();
        });
    } else {
        // No authorization header exists on the incoming
        // request, return not authorized and throw a new error 
        res.status(200).json({ error: "Not Authorized" });
        //throw new Error("Not Authorized");
    }
}
/* [END] Validate User */

function mysqlConnection(req, res, next){
    console.log("==Mysql Connection Middleware==");
    global.CONNECTION = require(BASEPATH + '/config/mysql');
    console.log('Mysql connected as id ' + CONNECTION.threadId);
    next();
}

module.exports = {
    isValidUser : isValidUser,
    mysqlConnection : mysqlConnection
}