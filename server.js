
/* Global Variables */
/* ALL Global variables should be in CAPITAL LETTERS */
global.BASEPATH = __dirname;

/* Initializing App */
const app = require(BASEPATH + '/config/app');

/* Initialize Port */
const port = process.env.PORT || 4000;

app.listen(port);

console.log(`Server started on Port : ${port}`);