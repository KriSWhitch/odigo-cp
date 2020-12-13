$(document).ready(function () {
    
    // XML Title
    var xml = "<?xml version = '1.0'?>" +
              "<head>Odigo Travel</head>";
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xml, "text/xml");
    var names = xmlDoc.getElementsByTagName("head");
    var title = document.getElementsByTagName("title");
    title[0].innerHTML = names[0].innerHTML;

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

    /*Fixed Header*/
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        
        if (height > 50) {
            $('.header').addClass("header-active");
        } else {
            $('.header').removeClass("header-active");
        }
    });

    /* To the top */
    $(window).scroll(function() {
        var height = $(window).scrollTop();

        if (height > 100) {
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

    /* header anchor's */
    $("#header").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
        
});


