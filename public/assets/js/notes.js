var $newNotesList = $("#newNotes-list");
var newNote = $("#num-newNotes");

var getAndRendernewNotes = function() {
  $.ajax({ method: "GET", url: "/api/newNote" }).then(function(data) {
    var $newNotesListItems = [];

    for (var i = 0; i < data.length; i++) {
      var newNotes = data[i];

      var $li = $("<li class='list-group-item'>");
      var $title = $("<p>").text("Title: " + newNotes.cause);
      var $body = $("<p>").text("Body: " + newNotes.amount);

      $li.append($noteWriterP, $title, $body);

      $newNotesListItems.push($li);
    }

    $newNotesList.append($newNotesListItems);
    newNote.text($newNotesListItems.length);
  });
};

getAndRendernewNotes();