$(document).ready(function() {
    $('.panel-title').on('click', function () {
       $(this).parents('.panel').toggleClass('open');
    });

    $('.btn-mobile').click(function () {
        $('.navigation').slideToggle();
    });

    // модальные окна (несколько)
    $(document).ready(function () {
        var overlay = $('.overlay');
        var open_modal = $('.open_modal');
        var close = $('.modal__close, .overlay');
        var modal = $('.modal__div');

        open_modal.click(function (event) {
            event.preventDefault();
            var div = $(this).attr('href');
            overlay.fadeIn(400,
                function () {
                    $(div)
                        .css('display', 'flex')
                        .animate({
                            opacity: 1,
                            top: '50%'
                        }, 200);
                });
        });

        close.click(function () {
            modal
                .animate({
                        opacity: 0,
                        top: '45%'
                    }, 200,
                    function () {
                        $(this).css('display', 'none');
                        overlay.fadeOut(400);
                    }
                );
        });
    });
//end

    $(".form").submit(function () {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });
});

$(document).ready(function () {
    // var leftMargin = 0;
    // var width = $(document).width();
    var windowWidth = ($(window).width()) / 2;

    $('.price .right-arrow').click(function (e) {
        e.preventDefault();
        $('.price__content').animate({
            marginLeft: "-=" + windowWidth
        }, 700);

        // $('.left-arrow').show();
        // leftMargin = (leftMargin + windowWidth);
        // if (leftMargin > width - windowWidth) {
        //     $('.right-arrow').hide();
        // }
    });

    $('.price .left-arrow').click(function (e) {
        e.preventDefault();
        $('.price__content').animate({
            marginLeft: "+=" + windowWidth
        }, 700);

        // $('.right-arrow').show();
        // leftMargin = (leftMargin - windowWidth);
        // if (leftMargin == 0) {
        //     $('.left-arrow').hide();
        // }
    });

    $('.mass-media .right-arrow').click(function (e) {
        e.preventDefault();
        $('.mass-media__content').animate({
            marginLeft: "-=" + windowWidth
        }, 700);

        // $('.left-arrow').show();
        // leftMargin = (leftMargin + windowWidth);
        // if (leftMargin > width - windowWidth) {
        //     $('.right-arrow').hide();
        // }
    });

    $('.mass-media .left-arrow').click(function (e) {
        e.preventDefault();
        $('.mass-media__content').animate({
            marginLeft: "+=" + windowWidth
        }, 700);

        // $('.right-arrow').show();
        // leftMargin = (leftMargin - windowWidth);
        // if (leftMargin == 0) {
        //     $('.left-arrow').hide();
        // }
    });

});
