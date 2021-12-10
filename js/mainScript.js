$('.type-card').slick({
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
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
$('.category span').on("click" , function (){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
});
$('.category span').on("click" , function () {
    var data_category = $(this).data('category');
    data_category='#' + data_category;
    console.log(data_category)

    $(data_category).show();
    $(data_category).siblings().hide();
});

