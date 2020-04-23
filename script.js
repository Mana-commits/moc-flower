$(function() {

    //要素のふわっと表示
    $(window).scroll(function() {
        $('.fadeIn').each(function() {
            var targetElement = $(this).offset().top;
            var scrollPoint = $(window).scrollTop();
            var windowHeight = $(window).height();

            if (scrollPoint > targetElement - windowHeight + 400) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });

    //種類のクラス付け替え
    $(function() {
        var windowSize = $(window).width();
        if (windowSize <= 768) {
            $('.kinds-wrap').removeClass('row');
            $('.kinds-img').removeClass('col-6');
            $('.kinds-contents').removeClass('col-6');

        } else if (windowSize > 768) {
            $('.kinds-wrap').addClass('row');
            $('.kinds-img').addClass('col-6');
            $('.kinds-contents').addClass('col-6');
        }
    });

    $(window).resize(function() {
        $(function() {
            var windowReSize = $(window).width();
            if (windowReSize <= 768) {
                $('.kinds-wrap').removeClass('row');
                $('.kinds-img').removeClass('col-6');
                $('.kinds-contents').removeClass('col-6');

            } else if (windowReSize > 768) {
                $('.kinds-wrap').addClass('row');
                $('.kinds-img').addClass('col-6');
                $('.kinds-contents').addClass('col-6');
            }
        });
    });

}); //function()