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
            var ear = "ear-l:" + Math.round(top) + ":" + Math.round(left);
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
            var ear = "ear-r:" + Math.round(top) + ":" + Math.round(left);
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
            var eye = "eye-l:" + Math.round(top) + ":" + Math.round(left);
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
            var eye = "eye-r:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(eye);
            var eye_r = document.getElementById('eyer');
            eye_r.value = eye;
        }
    });
    $('#hair_left').draggable({
        stop: function(e, ui) {
            var plc = $('#hair_left').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hair = "hair_l:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(hair);
            var hair_l = document.getElementById('hairl');
            hair_l.value = hair;
        }
    });
    $('#hair_right').draggable({
        stop: function(e, ui) {
            var plc = $('#hair_right').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hair = "hair_r:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(hair);
            var hair_r = document.getElementById('hairr');
            hair_r.value = hair;
        }
    });
    $('#hige_left').draggable({
        stop: function(e, ui) {
            var plc = $('#hige_left').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hige = "hige_l:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(hige);
            var hige_l = document.getElementById('higel');
            hige_l.value = hige;
        }
    });
    $('#hige_right').draggable({
        stop: function(e, ui) {
            var plc = $('#hige_right').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hige = "hige_r:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(hige);
            var hige_r = document.getElementById('higer');
            hige_r.value = hige;
        }
    });
    $('#hige_center').draggable({
        stop: function(e, ui) {
            var plc = $('#hige_center').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var hige = "hige_c:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(hige);
            var hige_c = document.getElementById('higec');
            hige_c.value = hige;
        }
    });
    $('#mayu_left').draggable({
        stop: function(e, ui) {
            var plc = $('#mayu_left').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var mayu = "mayu_l:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(mayu);
            var mayu_l = document.getElementById('mayul');
            mayu_l.value = mayu;
        }
    });
    $('#mayu_right').draggable({
        stop: function(e, ui) {
            var plc = $('#mayu_right').position();
            var top = plc.top - face_top;
            var left = plc.left - face_left;
            var mayu = "mayu_r:" + Math.round(top) + ":" + Math.round(left);
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
            var mouse = "mouse:" + Math.round(top) + ":" + Math.round(left);
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
            var nose = "nose:" + Math.round(top) + ":" + Math.round(left);
            // コンソールに表示
            console.log(nose);
            var nose_ = document.getElementById('nose_');
            nose_.value = nose;
        }
    });
});