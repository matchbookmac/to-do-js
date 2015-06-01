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
            '<input type="checkbox" value=' + newTask.description + '>' +
          '</label>' +
          '<span class="task">' + newTask.description + ' by ' + newTask.dueDate + '</span>' +
        '</div>' +
      '</li>'
    );

    $(".list").children().last().click(function() {
    });

    $( "input[type=checkbox]" ).click(function() {
      $(this).prop('checked', false);
      var completeTask = $(this).parents().find("li")
      var newTask = completeTask.clone().appendTo(".complete-list");
      completeTask.remove();
      $("#complete").show();

      $( "#complete" ).children().last().find("input[type=checkbox]").click(function() {
        $(this).prop('checked', false);
        var uncompleteTask = $(this).parents().find("li")
        var newTask = uncompleteTask.clone().appendTo(".list");
        uncompleteTask.remove();
        // $("#complete").show();
        $( "#list" ).children().last().find( "input[type=checkbox]" ).click(function() {
          $(this).prop('checked', false);
          var completeTask = $(this).parents().find("li")
          var newTask = completeTask.clone().appendTo(".complete-list");
          completeTask.remove();
        });

      });
    });

    event.preventDefault();
  });

  //
  // var complete = function() {
  //   debugger;
  //   console.log($("input:checked"));
  // };
  // $("form#complete").submit(function(event) {
  //   debugger;
  //   event.preventDefault();
  //   if (event.target.input.checked) {
  //     console.log("yep");
  //   }
  // });
});
