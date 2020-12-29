$(function () {
    'use strict';

    // active owl carousel plugin
    $('.owl-carousel').owlCarousel();

    // add active link on click
    $('.navbar .nav-item .nav-link').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').parent().siblings().find('nav-link').removeClass('active');
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });

    // set header height with js
    $('.header').height($(window).height());

    // animated navbar with scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('.navbar').innerHeight()) {
            console.log('done')
            $('.navbar').addClass('navbar-special');
        } else {
            $('.navbar').removeClass('navbar-special');
        }

        $('.block').each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockId = $(this).attr('id');
                $('.navbar .nav-item .nav-link').removeClass('active');
                $('.navbar .nav-item .nav-link[data-scroll=" ' + blockId + ' "').addClass('active');
            }
        });

        if ($(window).scrollTop() > $('.about-us').offset().top) {
            $('.button-scroll-up').fadeIn();
        } else {
            $('.button-scroll-up').fadeOut();
        }
    });

    // on click about scroll top window go up
    $('.button-scroll-up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    });
});