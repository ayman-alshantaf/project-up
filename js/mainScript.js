$(function() {
    $('.type-card').slick({
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: "<i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i>\n",
        nextArrow: "<i class=\"fa fa-chevron-right\" aria-hidden=\"true\"></i>\n",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".category span").on('click', function () {
        var filter = $(this).data('category');
        $(".type-card").slick('slickUnfilter');

        if (filter == 'tilbud') {
            $(".type-card").slick('slickFilter', '.tilbud');
        } else if (filter == 'nyheder') {
            $(".type-card").slick('slickFilter', '.nyheder');
        } else if (filter == 'topsalgere') {
            $(".type-card").slick('slickFilter', '.topsalgere');
        }

    });
    $('.category span').on("click", function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    });

    $(".zoom").ezPlus(
        {
            tint: true,
            tintColour: '#b1b0b0',
            tintOpacity: 0.5,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,
            easing: true,
            zoomWindowWidth: 250,
            zoomWindowHeight: 250,
            borderSize: 1,
            borderColour: '#888',
            lensBorderColour: '#37e80b',
            zoomLevel: 1.2,
            zoomTintFadeIn: true,
            zoomTintFadeOut: true,
            zoomWindowOffsetX: 25,

        }
    );


    $(window).on('resize', function () {
        var win = $(this); //this = window
        if (win.width() <= 850) {
            $('.ZoomContainer').remove();
        }
    });
    $('.fa-th-large').on('click' , function (){
        $('.content-center-products').fadeIn(300);
        $('.product-allDetail').fadeOut(300);
        $(this).addClass('active');
        $('.fa-list').removeClass('active');
    })
    $('.fa-list').on('click' , function (){
        $('.content-center-products').fadeOut(300);
        $('.product-allDetail').fadeIn(300);
        $(this).addClass('active');
        $('.fa-th-large').removeClass('active');
    })

    $('.filter-list > li').on('click' ,function (){
         $(this).parent().animate({
             left:'-100%',
         },250);
         $(this).children('ul').show(250);
         $(this).addClass('active');
         $(this).siblings().css({
             'display':'none'
         })
        $('.header-filter > .main-list-header').removeClass('active');
        $('.header-filter > .sub-list-header').addClass('active');
        $(this).find('.form-check-input').change(function (){
           if (this.checked){
               $('.footer-list').addClass('active');
           }else {
               $('.footer-list').removeClass('active');

           }
        })
    })


    $('.sub-list-header .prev-list').on("click",function (){
        $('.filter-list > li').parent().animate({
            left:'0%',
        },200);
        $('.header-filter > div').toggleClass('active');
        $('.filter-list > li').css({
            'display':'block'
        })
    })
    $('.filter-button > button').on('click' , function (){
        $('.section-filter-tablet').animate({
            left:'0%',
        })
        $(this).parent().parent().parent().toggle();
        $('.filter-close-page').css({
            'display':'block'
        });
    })
    $('.close-filter .fa-times').on('click',function (){
        $('.section-filter-tablet').animate({
            left:'-70%',
        })
        $('.container-filter-tablet').toggle();
        $('.filter-close-page').css({
            'display':'none'
        });
    })
    $('.filter-close-page').on('click',function (){
        $('.section-filter-tablet').animate({
            left:'-70%',
        })
        $('.container-filter-tablet').toggle();
        $(this).css({
            'display':'none'
        });
    })

});



