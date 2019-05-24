$("#scrollToNosotros").click(function() {
    $('html, body').animate({
        scrollTop: $("#blockOne").offset().top
    }, 2000, 'swing');
});