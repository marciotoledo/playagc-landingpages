$(window).on('scroll', function() {
    if ($(window).scrollTop() > 500) {
        $('.header').addClass('is-scrolling');
    } else {
        $('.header').removeClass('is-scrolling');
    }
});