$(document).ready(function () {
    // Mobile Menu
    const mMenuBtn = $(".m-menu-button");
    const mMenu = $(".m-menu");
    mMenuBtn.on("click", function(){
        mMenu.toggleClass("active");
        $(".support-search-mobile").css("display", "flex");
        $("body").toggleClass("no-scroll");
        // scroll-fix for IPhone
        $(document).on("touchmove",function(event){
            event.preventDefault();
          });
    });

    // Burger Animation
    $(".m-menu-button").click(function () {
        $(this).toggleClass("active");
    });

});


/* To the top */
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100 && height < 5800) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});