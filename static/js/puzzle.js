$(function() {
    $("#start").on("click", function() {
        $(".parts").draggable();
        // $("#mekakusi").show();
        $(this).hide();
        $("#kansei").show();
    });
    $("#kansei").on("click", function() {
        // $("#mekakusi").hide();
        $(".parts").draggable("disable");
        $("#kansei").hide();
        $("#Pre").show();
        $("#post").show();
    });
    var element = $("#images"); // global variable
    var getCanvas; // global variable
    $("#Pre").on('click', function() {
        html2canvas(element, {
            onrendered: function(canvas) {
                $("#previewImage").append(canvas);
                getCanvas = canvas;
            }
        });
        $(this).hide();
        $('#download').show();
    });
    $("#download").on('click', function() {
        var imgageData = getCanvas.toDataURL("image/png");
        // Now browser starts downloading it instead of just showing it
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("#download").attr("download", "hogehoge.png").attr("href", newData);
    });

});