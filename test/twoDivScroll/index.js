var sections = $('section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();

$('nav').on('scroll', function() {
    var cur_pos = $(this).scrollTop();
})

$('.sections').on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top
        bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            var targetA = nav.find('a[href="#' + $(this).attr('id') + '"]');

            targetA.addClass('active');
        }
    });
});

nav.find('a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');
    $('a').removeClass('active');
    $el.addClass('active');

    $('html, .sections').animate({
        scrollTop: $(id).offset().top - nav_height
    }, 500);

    return false;
});