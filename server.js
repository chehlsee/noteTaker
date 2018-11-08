// import all of the node modules we installed and need to run this app 
var mysql = require("mysql");
var express = require("express");
var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes = require("./routes/htmlRoutes");

// create an express application
const app = express();
var PORT = process.env.PORT || 3000;

// load all of the middleware
// 13-express 11-express-static-router
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// use API and HTML routes
// 13-express 11-express-static-router
// api routes store and retrieve data from the data array. this mimics fetching data from a database and saving to it
// html files or static routes are the views of our app and they will make requests to the API routes to fetch and update the data
app.use(apiRoutes);
app.use(htmlRoutes);

// start the application
app.listen(PORT, function() {
  console.log("Now listening on PORT: ", PORT);
});

