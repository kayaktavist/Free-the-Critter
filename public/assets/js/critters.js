// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-free").on("click", function(event) {
    var id = $(this).data("id");
    var newfree = $(this).data("newfree");

    var newfreestate = {
      free: newfree
    };

    // Send the PUT request.
    $.ajax("/api/critters/" + id, {
      type: "PUT",
      data: newfreestate
    }).then(
      function() {
        console.log("changed free state to", newfree);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newcritter = {
      critter: $("#ca").val().trim(),
      free: $("[name=free]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/critters", {
      type: "POST",
      data: newcritter
    }).then(
      function() {
        console.log("created new critter" + newcritter);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-critter").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/critters/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted critter", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
