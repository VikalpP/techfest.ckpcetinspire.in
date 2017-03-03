/*
 Author       : Hash Theme.
 Template Name: Kalka - One Page Business Template
 Version      : 1.0
 */
/*=============================================
 Table Of Contents
 ================================================
 1. PRELOADER JS
 2. BOOTSTRAP TOOLTIP 
 3. MENU JS
 4. HOME SLIDER JS 
 5. TESTIMONIAL SLIDER
 6. BLOG SLIDER
 7. BRANCH LOGO
 8. COUNTDOWN JS  
 9. SECTIONS BACKGROUNDS JS 
 10. GOOGLE MAP
 11. MIXITUP JS
 12. VENOBOX JS
 13. WOW ANIMATION JS
 
 Table Of Contents end
 ================================================
 */
(function ($) {
    'use strict';

    jQuery(document).on('ready', function () {

        /* 1. PRELOADER JS */

        $(window).on('load', function () {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });

        /*END PRELOADER JS*/


        /* 2. BOOTSTRAP TOOLTIP  */

        $('[data-toggle="tooltip"]').tooltip();

        /* END BOOTSTRAP TOOLTIP  */


        /* 3. START MENU JS */

        $('a.page-scroll').on('click', function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.main-menu').addClass('menu-animation');
            } else {
                $('.main-menu').removeClass('menu-animation');
            }
        });

        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });

        /* END MENU JS */


        /* 9. SECTIONS BACKGROUNDS JS */

        var pageSection = $("section");
        pageSection.each(function (indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        /* END SECTIONS BACKGROUNDS */


    /* 12. START  VENOBOX JS */

    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title',
        infinigall: true
    });

    /* 12. END  VENOBOX JS */

    /* 13. START WOW ANIMATION JS */

    new WOW().init();

    /* END WOW ANIMATION JS */


})(jQuery);