const express = require("express");
const app = express.Router();
const cuurentDir = __dirname;
const MongoSearch = require("./Database/MongoDB.js");

//configuration for serve static files
app.get("/", (request, response) => {
  response.status(200).sendFile(`${cuurentDir}/public/html/Result.html`);
});

//API Endpoint
app.post("/api/v3/result/find", (request, response) => {
  let UniversityName = request.body.UniversityName;
  let CourseName = request.body.CourseName;
  let Semester = request.body.SelectSemester;
  let FindMethod = request.body.FindValue;
  let SearchValue = request.body.SearchValue;
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
