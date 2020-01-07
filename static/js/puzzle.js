$(function () {

  $("#start").on("click", function () {
    $(".parts").draggable();
    // $("#mekakusi").show();
    $(this).hide();
    $("#kansei").show();
  });

  $("#kansei").on("click", function () {
    // $("#mekakusi").hide();
    $(".parts").draggable("disable");
    $("#kansei").hide();
    $("#btn-Preview-Image").show();
    $("#post").show();
  });
});
$(document).ready(function () {


  var element = $("#images"); // global variable
  var getCanvas; // global variable

  $("#btn-Preview-Image").on('click', function () {
    html2canvas(element, {
      onrendered: function (canvas) {
        $("#previewImage").append(canvas);
        getCanvas = canvas;
      }
    });
  });

  $("#btn-Convert-Html2Image").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    // Now browser starts downloading it instead of just showing it
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#btn-Convert-Html2Image").attr("download", "hogehoge.png").attr("href", newData);
  });

});