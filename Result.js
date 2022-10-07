//import all modules that required
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoSearch = require('./Database/MongoDB.js');
//current directory
const cuurentDir = __dirname;
//use all modules
 /* Domain for CORS*/ let Domain = ['http://127.0.0.1:3000','https://result.theankan.live']
app.use(cors({origin:Domain}))
app.use(bodyParser.json());
// start server configuration
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
// configuration for static files
app.use(express.static('public'));

//configuration for serve static files
app.get('/', (request, response)=>{
    response.status(200).sendFile(`${cuurentDir}/public/html/home.html`);
})

//API Endpoint
app.post('/search', (request, response)=>{
  var UniversityName = request.body.UniversityName
  var CourseName = request.body.CourseName
  var Semester = request.body.SelectSemester
  var FindMethod = request.body.FindValue
  var SearchValue = request.body.SearchValue
  console.log(UniversityName, CourseName, Semester, FindMethod, SearchValue)
MongoSearch.MongoSearch(CourseName, Semester, FindMethod, SearchValue, response)
})