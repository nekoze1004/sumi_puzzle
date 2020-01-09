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
    });
    var plc = $('#face').position();
    var face_top = plc.top;
    var face_left = plc.left;
    console.log(face_top);
    console.log(face_left);
    $('#ear-l').draggable({
        stop: function(e, ui) {
            var plc = $('#ear-l').position();
            console.log(plc);
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var ear = "ear-l_" + Math.round(top) + "_" + Math.round(left);
            console.log(ear);
            // コンソールに表示
            var ear_l = document.getElementById('earl');
            ear_l.value = ear;
        }
    });
    $('#ear-r').draggable({
        stop: function(e, ui) {
            var plc = $('#ear-r').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var ear = "ear-r_" + Math.round(top) + "_" + Math.round(left);
            console.log(ear);
            // コンソールに表示
            var ear_l = document.getElementById('earr');
            ear_l.value = ear;
        }
    });
    $('#eye-l').draggable({
        stop: function(e, ui) {
            var plc = $('#eye-l').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var eye = "eye-l_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(eye);
            var eye_l = document.getElementById('eyel');
            eye_l.value = eye;
        }
    });
    $('#eye-r').draggable({
        stop: function(e, ui) {
            var plc = $('#eye-r').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var eye = "eye-r_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(eye);
            var eye_r = document.getElementById('eyer');
            eye_r.value = eye;
        }
    });
    $('#hair-left').draggable({
        stop: function(e, ui) {
            var plc = $('#hair-left').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hair = "hair-l_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(hair);
            var hair_l = document.getElementById('hairl');
            hair_l.value = hair;
        }
    });
    $('#hair-right').draggable({
        stop: function(e, ui) {
            var plc = $('#hair-right').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hair = "hair-r_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(hair);
            var hair_r = document.getElementById('hairr');
            hair_r.value = hair;
        }
    });
    $('#hige-left').draggable({
        stop: function(e, ui) {
            var plc = $('#hige-left').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hige = "hige-l_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(hige);
            var hige_l = document.getElementById('higel');
            hige_l.value = hige;
        }
    });
    $('#hige-right').draggable({
        stop: function(e, ui) {
            var plc = $('#hige-right').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hige = "hige-r_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(hige);
            var hige_r = document.getElementById('higer');
            hige_r.value = hige;
        }
    });
    $('#hige-center').draggable({
        stop: function(e, ui) {
            var plc = $('#hige-center').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hige = "hige-c_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(hige);
            var hige_c = document.getElementById('higec');
            hige_c.value = hige;
        }
    });
    $('#mayu-left').draggable({
        stop: function(e, ui) {
            var plc = $('#mayu-left').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var mayu = "mayu-l_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(mayu);
            var mayu_l = document.getElementById('mayul');
            mayu_l.value = mayu;
        }
    });
    $('#mayu-right').draggable({
        stop: function(e, ui) {
            var plc = $('#mayu-right').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var mayu = "mayu-r_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(mayu);
            var mayu_r = document.getElementById('mayur');
            mayu_r.value = mayu;
        }
    });
    $('#mou').draggable({
        stop: function(e, ui) {
            var plc = $('#mou').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var mouse = "mouse_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(mouse);
            var mouse_ = document.getElementById('mous');
            mous.value = mouse;
        }
    });
    $('#nose').draggable({
        stop: function(e, ui) {
            var plc = $('#nose').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var nose = "nose_" + Math.round(top) + "_" + Math.round(left);
            // コンソールに表示
            console.log(nose);
            var nose_ = document.getElementById('nose_');
            nose_.value = nose;
        }
    });
});