$(document).ready(function () {
    //アニメーションスピード
    var scrollSpeed = 0.5;
    //画像サイズ
    var imgWidth = 1000;
    var imgHeight = 1000;
    //画像の初期位置
    var posX = 0;
    var posY = 0;
    //ループ処理
    setInterval(function () {
        //画像のサイズまで移動したら0に戻る。
        if (posX >= imgWidth) posX = 0;
        posX += scrollSpeed;
        if (posY >= imgHeight) posY = 0;
        //scrollSpeed分移動
        posY += scrollSpeed;
        $('body').css("background-position", posX + "px " + posY + "px");

    }, 1);

});