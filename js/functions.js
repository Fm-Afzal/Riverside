var $ = jQuery.noConflict();

$(function () {
    /* Show Header when scroll up */
    /* ------------------------------------------- */
    var lastScrollTop = 0;
    var $header = $("header");
    var headerHeight = $header.outerHeight();

    $(window).scroll(function () {
        var windowTop = $(window).scrollTop();

        if (windowTop >= headerHeight) {
            $header.addClass("header-sticky");
        } else {
            $header.removeClass("header-sticky");
            $header.removeClass("header-show");
        }

        if ($header.hasClass("header-sticky")) {
            if (windowTop < lastScrollTop) {
                $header.addClass("header-show");
            } else {
                $header.removeClass("header-show");
            }
        }
        lastScrollTop = windowTop;
    });

    /* Main Nav */
    /* ------------------------------------------- */

    if ($(window).width() > 1080) {
        $(".main--menu > .menu-item-has-children").on({
            mouseenter: function () {
                $("body").addClass("nav-expanded");
                $(this).siblings().removeClass("open-nav");
                $(this).addClass("open-nav");
            },
            mouseleave: function () {
                $("body").removeClass("nav-expanded");
                $(this).removeClass("open-nav");
            },
        });
    } else {
        $(".toggleNav").on("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            $("body").toggleClass("nav-expanded");
            $(".mobileNav").slideToggle();
        });

        $(".main--menu > .menu-item-has-children > a").on(
            "click",
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).next(".megaMenu-wrap").slideToggle();
            }
        );
    }

    if ($(window).width() < 1024) {
        $(".footerLinkTitle").on("click", function (e) {
            $(this).next(".footerLinkContent").slideToggle();
        });

        $("#menu-mobile-main-menu > .menu-item-has-children > a").on(
            "click",
            function (e) {
                e.preventDefault();
                $(this).siblings(".sub-menu").slideToggle();
            }
        );
    }
});  