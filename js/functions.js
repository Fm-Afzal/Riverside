// conflict bugg solution
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
/* Scroll to Top  */
$(".backtoTop").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: "0" }, 1000);
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    /* # of pixels before element*/
    var detectAreaTopOffset = 15;
    /* # of pixels after element*/
    var detectAreaBottomOffset = 100;
    return (
        elemTop <= docViewBottom + detectAreaTopOffset &&
        elemBottom >= docViewTop - detectAreaBottomOffset
    );
}
/* Scroll to Top End */

new Swiper(".gridPromoSlider", {
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
            spaceBetween: 22,
            slidesPerView: 3,
        },
        1220: {
            spaceBetween: 22,
            slidesPerView: 4,
        },
    },
});

const promoSliders = document.querySelectorAll(".promoSlider");

promoSliders.forEach(function (slider) {
    new Swiper(slider, {
        slidesPerView: "auto",
        spaceBetween: 14,
        mousewheel: true,
        navigation: {
            nextEl: slider.querySelector(".swiper-button-next"),
            prevEl: slider.querySelector(".swiper-button-prev"),
        },
        breakpoints: {
            1024: {
                spaceBetween: 22,
            },
        },
    });
});
// promoSlider end

new Swiper(".timelineSlider", {
    slidesPerView: "auto",
    mousewheel: true,
    autoHeight: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 1.2,
            autoHeight: false,
        },
    },
});
// timelineSlider end

new Swiper(".gallerySlider", {
    slidesPerView: "auto",
    spaceBetween: 14,
    mousewheel: true,
    navigation: {
        nextEl: ".gallery-next",
        prevEl: ".gallery-prev",
    },
    breakpoints: {
        1024: {
            spaceBetween: 22,
        },
    },
});
// gallerySlider end


// filtering functions for mobile device
$(".filterPopup").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active-filter");
    $(this).siblings().toggleClass("expand-filter");
});

$(".mapImgPopup").magnificPopup({
    type: "image",
});

$(".popup-gallery").magnificPopup({
    delegate: "a",
    type: "image",
    overflowY: "auto",
    showCloseBtn: false,
    gallery: {
        enabled: true,
    },
    callbacks: {
        open: function () {
            $(".mfp-counter").hide();
        },
    },
    image: {
        titleSrc: function (item) {
            return item.el.attr("title");
        },
    },
    // mainClass: "my-mfp-zoom-in",
});

// End of Magnific Popup

/* accordion function */
/* ------------------------------------------- */

//BEGIN
$(".accordion-header").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
        $(".accordion-body").slideUp(400);
        $(".accordion-header").removeClass("accordion-active");
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
});
//END
$(".ShowNewsletterPopup").on("click", function (e) {
    e.preventDefault();
    $(".newsletter__popup").addClass("popUp-show");
});

// Close the popup
$(".close_newsletterPopup").on("click", function () {
    $(".newsletter__popup").removeClass("popUp-show");
});