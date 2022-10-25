//import all modules that required
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoSearch = require('./Database/MongoDB.js');
const Router = require('./route');
//current directory
const cuurentDir = __dirname;
//use all modules
 /* Domain CORS*/ let Domain = ['*']
app.use(cors({origin:Domain}))
app.use(bodyParser.json());
// start server configuration
app.listen(port, () => {
  console.log(`Server listening at ${port}`)
})
// configuration for static files
app.use(express.static('public'));

// Configure Express Routing
 app.use(Router)
