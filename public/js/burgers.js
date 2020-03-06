$(function() {

$("#submitbutton").click(function(event){
    event.preventDefault();

    let newburger = {
        burger_name: $("#burgername").val().trim(),
        devoured: 0
    };
    
    console.log(newburger)
    // console.log(newburger);
    $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
    }).then(
        function() {
            console.log("created new burger");
          // Reload the page to get the updated list
            location.reload();
        }
    );
});

    $(".devourer").on("click", function(event) {
    var id = $(this).data("id");
    var newstate = true;
    // console.log("clicked")

    var neweatstate = {
        eaten: newstate
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: neweatstate
    }).then(
      function() {
        console.log("changed sleep to", newstate);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

})