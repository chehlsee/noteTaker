// 13-express 12-hot-restaurant
var $submitBtn = $(".submit");

var handleSubmitClick = function(event) {
  event.preventDefault();
}

// get the new not info from the form
var newNote = {
  title: $("note-title").val().trim(),
  body: $("note-body").val().trim()
};

// post the new note to "/api/tables"
$.ajax({
  url: "/api/tables",
  method: "post",
  data: newNote
}).then(function(data) {
  // if the note was created tell user the note was created
  if (data) {
    alert("YAY! Your note has been created!")
  }
  // if the note isn't created tell the user the note was not created
  else {
    alert("Sorry your note was not created")


// clear the information on the form after submitting new note information
$("#note-title").val("");
$("#note-body").val("");

};
});

// run handleSubmitClick whenever the form is submitted
$submitBtn.on("click", handleSubmitClick);

