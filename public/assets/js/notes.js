var $newNotesList = $("#newNotes-list");
var newNote = $("#num-newNotes");

var getAndRendernewNotes = function() {
  $.ajax({ method: "GET", url: "/api/newNotes" }).then(function(data) {
    var $newNotesListItems = [];

    for (var i = 0; i < data.length; i++) {
      var newNotes = data[i];

      var $li = $("<li class='list-group-item'>");
      var $noteWriterP = $("<p>").text("noteWriter: " + newNotes.noteWriter);
      var $causeP = $("<p>").text("Cause: " + newNotes.cause);
      var $amountP = $("<p>").text("Amount: " + newNotes.amount);

      $li.append($noteWriterP, $causeP, $amountP);

      $newNotesListItems.push($li);
    }

    $newNotesList.append($newNotesListItems);
    newNote.text($newNotesListItems.length);
  });
};

getAndRendernewNotes();