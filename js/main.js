$(function () {
    $('.large-post.post, .small-post.post').slice(0, 3).css('display','flex'); //show first 3 event posts on load 
    $("#loadMore").on('click', function (e) { // on click of Load More button 
        e.preventDefault();
        $('.large-post.post:hidden, .small-post.post:hidden').slice(0, 4).slideDown().css('display','flex');   //slide Down 3 more posts 
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);

        // check if there are any hidden posts left
        if ($('.large-post.post:hidden, .small-post.post:hidden').length == 0) {
            $('#loadMore').hide();
            $('#backToTop').css('display','flex');
        }
        

        //Scrolls back to top on click of Back To Top button 
        $('#backToTop').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });
});
