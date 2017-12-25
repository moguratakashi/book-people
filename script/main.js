//-------------------- search --------------------//

// [#acdn-button]にクリックイベントを設定する
$('#acdn-button1').click(function () {
    $(this).toggleClass('active');
    $('#acdn-target1').slideToggle();
});

$('#acdn-button2').click(function () {
    $(this).toggleClass('active');
    $('#acdn-target2').slideToggle();
});

$('#acdn-button3').click(function () {
    $(this).toggleClass('active');
    $('#acdn-target3').slideToggle();
});

// [#tojiru-button]にクリックイベントを設定する
$('#tojiru-button1').click(function () {
    $('#acdn-button1').removeClass('active');
    $('#acdn-target1').slideToggle();
});

$('#tojiru-button2').click(function () {
    $('#acdn-button2').removeClass('active');
    $('#acdn-target2').slideToggle();
});


//質問とその回答から探すエリア
$('.qa').slick({
    arrows: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '150px',
    variableWidth: true,
});

// 今週の初めましてさんエリア
$('.newcomer').slick({
    arrows: true,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: '20px',
    variableWidth: true
});

// 748px以上の場合はメニューを開く（リサイズ）
var timer = false;
$(window).resize(function () {
    if (timer != false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        console.log('resized');
        var x = $(window).width();
        //windowの分岐幅をyに代入
        var y = 748;
        if (x >= y) {
            $('#acdn-target1').show();
            $('#acdn-target2').show();
            $('#acdn-target3').show();
            $('#acdn-button1').addClass('active');
            $('#acdn-button2').addClass('active');
            $('#acdn-button3').addClass('active');
        }
    }, 200);
});

// 748px以上の場合はメニューを開く（ロード）
$(window).ready(function () {
    //windowの幅をxに代入
    var x = $(window).width();
    //windowの分岐幅をyに代入
    var y = 748;
    if (x >= y) {
        $('#acdn-target1').show();
        $('#acdn-target2').show();
        $('#acdn-target3').show();
        $('#acdn-button1').addClass('active');
        $('#acdn-button2').addClass('active');
        $('#acdn-button3').addClass('active');
    }
});

//-------------------- search-job --------------------//

//クリックしたときのファンクションをまとめて指定
$('.tab li').click(function () {

    //.index()を使いクリックされたタブが何番目かを調べ、
    //indexという変数に代入します。
    var index = $('.tab li').index(this);

    //コンテンツを一度すべて非表示にし、
    $('.tab-content li').css('display', 'none');

    //クリックされたタブと同じ順番のコンテンツを表示します。
    $('.tab-content li').eq(index).css('display', 'block');

    //一度タブについているクラスselectを消し、
    $('.tab li').removeClass('tab-select');

    //クリックされたタブのみにクラスselectをつけます。
    $(this).addClass('tab-select')
});
