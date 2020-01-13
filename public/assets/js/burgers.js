$(function() {

$("#button").click(function(event){
    event.preventDefault();

    let newburger = $("#burgername").val().trim()

    $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
        }).then(function() {
        console.log("created new burger");
        location.reload();
        });




    });

})
