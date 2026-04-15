$(document).ready(function() {
  $("#colorBtn").click(function() {
    $("#main-title").css("color", "#c96f3b");
  });

  $("#fadeBtn").click(function() {
    $("#bakery-image").fadeToggle(1000);
  });

  $("#slideBtn").click(function() {
    $("#special-info").slideToggle();
  });
});