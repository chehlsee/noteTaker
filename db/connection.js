// connection.js from 07-hotrestaurant
var mysql = require("mysql");
// import all of the node modules we installed and need to run this app 

var connection;

// Sets up db to connect locally or on JAWSDB if deployed
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "",
    database: "noteTaker"
  });
}

// Turns BOOLEAN 0s and 1s returned from the db into true and false
connection.config.typeCast = function(field, next) {
  if (field.type == "TINY" && field.length == 1) {
    return field.string() == "1"; // 1 = true, 0 = false
  }
  return next();
};

// function generates random string/characters in javascript
// toString() will return the specified values
// toLowerCase() converts string into lowercase letters, does not change the original string
// .val() gets the current value of the first element in the set of matched elements or set the value of every matched element
//trim() removes whitespace from both sides of a string
// should the function be newNote or text?
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


// Export the connection so it's available in other parts of the app
module.exports = connection;

