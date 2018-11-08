var $newNoteList = $("#title");
var $newNotetitle = $("#title");
var $newNotebody = $("#body");
var $submitBtn = $("#newNote-submit");
var $deleteBtn = $("#newNote-delete");

// Gets all newNote from the database, renders the newNote list
var getAndRendernewNote = function() {
  $.ajax({
    url: "/api/newNote",
    method: "GET"
  }).then(function(data) {
    var $listItems = [];

    // Loop through and build a list item for each newNote returned from the db
    for (var i = 0; i < data.length; i++) {
      var newNote = data[i];

      // Using the jQuery `data` method, we can attach data to an element for later use
      var $li = $("<li class='list-group-item'>").data(newNote);
      var $row = $("<div class='row'>");
      var $col11 = $("<div class='col-11'>");
      var $newNoteP = $("<p>").body('"' + newNote.body + '"');
      var $titleP = $("<p class='float-right'>").body("- " + newNote.title);
      var $clearFix = $("<div class='clearfix'>");
      var $ratingP = $("<p class='float-right'>").body(newNote.rating);
      var $col1 = $("<div class='col-1'>");
      var $upIcon = $("<i class='fas fa-angle-up'>");
      var $downIcon = $("<i class='fas fa-angle-down'>");

      $li.append(
        $row.append(
          $col11.append($newNoteP, $titleP, $clearFix, $ratingP),
          $col1.append($upIcon, $downIcon)
        )
      );

      $listItems.push($li);
    }

    $newNoteList.empty();

    $newNoteList.append($listItems);
  });
};


// Submits the newNote from the form to the db
var handlenewNoteSubmit = function(event) {
  event.preventDefault();

  var newNote = {
    title: $newNotetitle.val().trim(),
    body: $newNotebody.val().trim()
  };

  if (!newNote.title || !newNote.body) {
    alert("Please fill out all the required fields!");
    return;
  }

  $.ajax({
    url: "/api/newNote",
    method: "POST",
    data: newNote
  })
    .then(function() {
      getAndRendernewNote();
      $newNotetitle.val("");
      $newNotebody.val("");
    });
};


// getAndRendernewNote();

$submitBtn.on("click", handlenewNoteSubmit);