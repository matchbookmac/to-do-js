"use strict";


//jQuery
$( document ).ready(function() {
  $("form#new-item").submit(function(event) {

    var description = $("input#description").val();
    var dueDate = $("input#due-date").val();
    var newTask = {description: description, dueDate: dueDate}

    $("#to-do-list").show();
    $(".list").append(
      '<li>' +
        '<div class="checkbox">' +
          '<label>' +
            '<input type="checkbox" value="true">' +
          '</label>' +
          '<span class="task">' + newTask.description + ' by ' + newTask.dueDate + '</span>' +
        '</div>' +
      '</li>'
    );

    event.preventDefault();

  });

  $("")

});
