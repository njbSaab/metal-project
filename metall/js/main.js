$(document).ready(function () {
    new WOW().init();
    /*-----------MAIN MENU------------*/
    $(function () {
        $('.menu__icon').on('click', function () {
            $(this).closest('.menu')
                .toggleClass('menu_state_open');
        });

        $('.menu__links-item').on('click', function () {
            $(this).closest('.menu')
                .removeClass('menu_state_open');
        });
    });
    $(document).on('scroll', function () {
        if
        ($(document).scrollTop() > 20) {
            $('.main-menu').addClass('fixed');
        } else {
            $('.main-menu').removeClass('fixed');
        }
    });
    /*-----------Calculator-----------*/
    kg = 0;
    km = 0;
    sum_km = 0;
    sum_kg = 0;
    sum_dmnt = 0;
    sum_qck = 0;

    $(".kg").ionRangeSlider({
        type: "single",
        skin: "big",
        min: 0,
        max: 35,
        from: 0,
        grid: true,
        grid_num: 7,
        onFinish: function (data) {
            kg = (data.from);
            summa();
        }
    });

    $(".km").ionRangeSlider({
        type: "single",
        skin: "big",
        min: 0,
        max: 50,
        from: 0,
        grid: true,
        grid_num: 10,
        onFinish: function (data) {
            km = (data.from);
            summa();
        }
    });

    function dmnt() {
        if (kg <= 1) {
            sum_kg = kg * 4 * 1000;
        } else if (kg > 1 && kg <= 2) {
            sum_kg = kg * 4.5 * 1000;
        } else if (kg > 2 && kg < 5) {
            sum_kg = kg * 4.8 * 1000;
        } else {
            sum_kg = kg * 5 * 1000;
        }
        sum_dmnt = kg * 500;
        if ($(".demontage").is(":checked")) {
            sum_kg = sum_kg - sum_dmnt;
        }
    }

    function qck() {
        sum_km = km * 100;
        sum_qck = kg * 50;
        if ($(".quick").is(":checked")) {
            sum_kg = sum_kg - sum_qck;
        }
    }


    $("input").on("click", function () {
        summa();
    });


    function summa() {
        dmnt();
        qck();

        if (kg <= 0) {
            $('.sum').html('Укажите объем!').css('color', '#3679b3')
        } else if (kg < 2 && km >= 19 || kg <= 2 && km > 48) {
            $('.sum').html('Везите сами!').css('color', '#3679b3')
        } else if (kg > 0) {
            $('.sum').html(sum_kg - sum_km + ' грн.').css('color', 'black')
        }
    }
    $('.form-inline').submit(function () {
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "../js/mail.php", //Change
            data: th.serialize()


        }).done(function () {
            $('.overlay-callback').css('display', 'block');
            $('#form-callback').removeClass('visible');
            $('#success-message').addClass('visible');


            setTimeout(function () {
                // Done Functions
                th.trigger('reset');
                th.trigger('reset');
                $('#success-message').removeClass('visible');
                $('.overlay-callback').css('display', 'none');
                $('body').css('overflow-y', 'auto');

            }, 4000);
        });
        return false;
    });
    $('.connect').click(function () {
        $('.overlay-callback').fadeIn(500);
        $('#form-callback').addClass('visible');
        $('body').css('overflow-y', 'hidden');
    });

    $('.closemodal').click(function () {
        $('.overlay-callback, #cookies').fadeOut(500);
        $('body').css('overflow-y', 'auto');
    });

    $(document).on("click", "a.top", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
    if ($(window).width() < 480) {
        $(window).scroll(function () {
            $(".social-block").css("display", "none").fadeIn("slow");
        });
    } else {
        $(window).scroll(function () {
            $(".social-block").css("display", "none");
        });
    }
    var mh = 320;
    $(".img").each(function () {
        var h_block = parseInt($(this).height());
        if (h_block < mh) {
            mh = h_block;
        }
    });
    $(".img").height(mh);
});