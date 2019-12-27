$(function(){

  $("#start").on("click", function(){
    $(".parts").draggable();
    $("#mekakusi").show();
    $(this).hide();
    $("#kansei").show();
  });

  $("#kansei").on("click", function(){
    $("#mekakusi").hide();
    $(".parts").draggable("disable");
  });
});