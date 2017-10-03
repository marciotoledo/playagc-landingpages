$(window).on('scroll', function() {
    if ($(window).scrollTop() > 500) {
        $('.header').addClass('is-scrolling');
    } else {
        $('.header').removeClass('is-scrolling');
    }
});

$('.js-testimonials').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});