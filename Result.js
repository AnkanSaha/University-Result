//import all modules that required
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const Router = require("./route");
const helmet = require("helmet");
//use all modules
/* Domain CORS*/ let Domain = [
  "http://localhost:3000",
  "https://127.0.0.1:3000",
  "https://result.theankan.live",
];
app.use(cors({ origin: Domain }));
app.use(bodyParser.json());
// start server configuration
app.listen(port, () => {
  console.log(`Server listening at ${port}`);
});
// configuration for static files
app.use(express.static("public"));
// Configure Express Routing
app.use(Router);
// using helmet for security
app.use(helmet({contentSecurityPolicy: false}));
