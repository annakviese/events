$(function () {
    $('.large-post.post, .small-post.post').slice(0, 3).css('display','flex');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".large-post.post, .small-post.post:hidden").slice(0, 4).slideDown().css('display','flex');
        if ($(".large-post.post, .small-post.post:hidden:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});