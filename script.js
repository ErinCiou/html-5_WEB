// document ready
$(function() {

    // 移除行動裝置影片，769是裝置大小
    if ($(window).width() < 769) {
        $('.top_header video').remove();
    }

    /*  */

    // 滑動至指定的位置
    $("nav a").click(function() {
        var btn = $(this).attr("href"); /* 取的當前作用的屬性裡的值 */
        var pos = $(btn).offset(); /* 抓btn的相對位置 */
        $('html,body').animate({ scrollTop: pos.top }, 1000);
        // $('html,body').animate({}, 1000); 正常寫法，大括號放入想要的動畫效果，逗號後為秒數
    }); /* 去抓取nav裡的a，並偵測click的動作 */

    $("#gotop").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
});

// 淡入淡出
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#gotop').stop().fadeTo('', .7);
    } else {
        $('#gotop').stop().fadeOut(); /* else不需要小括號，因為小括號裡面包條件式，else是否則所以不需要條件 */
    }
});

// 要加入.stop()去避免程式的強迫症會硬要把次數跑完
//fadeTo()可以設定要多少數值