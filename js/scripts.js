$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#person").val().toUpperCase();

  $(".yourAnswer").text(personInput);

  $("#result").show();

  event.preventDefault();

  });
});
