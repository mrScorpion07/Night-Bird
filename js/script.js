$(function () {
    'use strict'
    // Audio js
    $(function () {
        $('audio').audioPlayer();
    });

    // Veno Box
    new VenoBox({
        selector: '.about_veno',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'grid',
        spinColor: 'plum'
    });

    new VenoBox({
        selector: '.gall_veno',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'grid',
        spinColor: 'plum'
    });


    new VenoBox({
        selector: '.dj_veno',
        numeration: true,
        infinigall: true,
        share: true,
        spinner: 'grid',
        spinColor: 'plum'
    });


    // Swiper slider
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 130,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

    // Countdown js

    $('.year').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%-Y Years'));
    });

    $('.month').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%-n Month'));
    });

    $('.day').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%-d Day'));
    });

    $('.hour').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%-H hours'));
    });

    $('.minite').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%-M Minite'));
    });

    $('.second').countdown('2030/01/01', function (event) {
        $(this).html(event.strftime('%-S Second'));
    });


    // Slick Slider

    $('.event_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.blog_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.test_slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Menu FIx
    let navoff = $('.main_menu').offset().top
    console.log(navoff);

    $(window).scroll(function () {
        let scroliing = $(this).scrollTop();

        if (scroliing > navoff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });

    //  Bc Top
    $('.bc_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();

        if (scrolling > 200) {
            $('.bc_top').fadeIn();
        } else {
            $('.bc_top').fadeOut();
        }
    });

});