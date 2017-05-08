$(function () {
    $('.large-post.post, .small-post.post').slice(0, 3).css('display','flex');
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        var postsHidden = $('.large-post.post, .small-post.post:hidden');
        $(postsHidden).slice(0, 4).slideDown().css('display','flex');
        
        if ($(postsHidden).length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});



    // checkScreenSize();
    // function checkScreenSize(){
    //     var newWindowWidth = $(window).width()
    //     if (newWindowWidth < 600) {