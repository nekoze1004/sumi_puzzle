
$(function () {
  var element = $("#images"); // 画像化したい要素をセレクタに指定
  var getCanvas;
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

  //プレビュー
  $("#btn-Preview-Image").on('click', function () {
    html2canvas(element, {
      onrendered: function (canvas) {
        $("#previewImage").append(canvas);
        getCanvas = canvas;
      }
    });
    $("#btn-Preview-Image").hide();
  });
});

