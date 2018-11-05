// import all of the node modules we installed and need to run this app 
var nodemon = require("nodemon");
var mysql = require("mysql");
var express = require("express");
var node = require("node");
var inquirer = require("inquirer");
var apiRoutes = require("./routes/apiROutes");
var htmlRoutes = require("./routes/htmlRoutes");


// create an express application
const app = express();
var PORT = process.env.PORT || 3000;

let data = {}

// load all of the middleware
// 13-express 11-express-static-router
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

// functions
// toString() will return the specified values
// toLowerCase() converts string into lowercase letters, does not change the original string
// .val() gets the current value of the first element in the set of matched elements or set the value of every matched element
//trim() removes whitespace from both sides of a string
function text (text){
  return text.toString().toLowerCase().val().trim()
}
function randomString(count){
  let text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i=0; i < count; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

// use API and HTML routes
// 13-express 11-express-static-router
// api routes store and retrieve data from the data array. this mimics fetching data from a database and saving to it
// html files or static routes are the views of our app and they will make requests to the API routes to fetch and update the data
app.use(apiRoutes);
app.use(htmlRoutes);

// set up API routes
app.get("notes.html"), (req, res, next) => {
  if(data[req.params] === undefined) {
    res.status(404).json({status: "error"})
  } else {
    res.json({data:data[req.parms]})
  }
}

app.put("notes.html"), (req,res, next) => {
  if (data[req.parms] === undefined) {
    res.status(404).json({status: "error"})
  } else {
    data[req.parms]["Title"] = req.body.Title
    res.json({status: "ok"})
  }
}

app.get("notes.html"), (req,res,next) => res.json({data})

app.post("notes.html"), (req,res,next) => {
  const noteTitle= randomString(24)
  res.json({data: data[title] = {Title: "Untitled"}})
}

// set up html routes
app.get("notes.html", (req,res) => res.sendFile(__dirname + "notes.html"))
app.get("/", (req,res) => res.sendFile(__dirname + "index.html"))


// start the application
app.listen(PORT, function() {
  console.log("Now listening on PORT: ", PORT);
});