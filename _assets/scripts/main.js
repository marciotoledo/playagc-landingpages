$(window).on('scroll', function() {
    if ($(window).scrollTop() > 150) {
        $('.header').addClass('is-scrolling');
    } else {
        $('.header').removeClass('is-scrolling');
    }
});

AOS.init({
    easing: 'ease-out',
    duration: 1000,
    offset: 300,
    disable: 'mobile'
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