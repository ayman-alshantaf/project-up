$(function() {
    $('.type-card').slick({
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay:true,
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

    $(".category span").on('click', function(){
        var filter = $(this).data('category');
        $(".type-card").slick('slickUnfilter');

        if(filter == 'tilbud'){
            $(".type-card").slick('slickFilter','.tilbud');
        }
        else if(filter == 'nyheder'){
            $(".type-card").slick('slickFilter','.nyheder');
        }
        else if(filter == 'topsalgere'){
            $(".type-card").slick('slickFilter','.topsalgere');
        }

    })
});

$('.category span').on("click" , function (){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});


