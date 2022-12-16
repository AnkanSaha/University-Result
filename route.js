const express = require("express");
const app = express.Router();
const cuurentDir = __dirname;
const MongoSearch = require("./Database/MongoDB.js");

//configuration for serve static files
app.get("/", (request, response) => {
  response.status(200).sendFile(`${cuurentDir}/public/html/Result.html`);
});

//API Endpoint
app.post("/search", (request, response) => {
  var UniversityName = request.body.UniversityName;
  var CourseName = request.body.CourseName;
  var Semester = request.body.SelectSemester;
  var FindMethod = request.body.FindValue;
  var SearchValue = request.body.SearchValue;
  console.log(UniversityName, CourseName, Semester, FindMethod, SearchValue);
  MongoSearch.MongoSearch(
    CourseName,
    Semester,
    FindMethod,
    SearchValue,
    response
  );
});
module.exports = app;
