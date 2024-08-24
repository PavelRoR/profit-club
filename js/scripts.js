$(document).ready(function() {
  /* Якорь */
  $("a[href^='#']").click(function (h) {
    h.preventDefault();
    var f = $(this).attr("href"),
        g = $(f).offset().top;
    $("body,html").animate({
        scrollTop: g
    }, 1500)
});

// слайдер с текстовыми отзывами
    $('.experts').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        loop: false,
        dots: 0,
        speed: 300,
        arrows: false,
        // centerPadding: '40px',
        adaptiveHeight: true,
        centerMode: 0,
        // initialSlide: -1,
        // appendArrows: '.text-revs-arrows-2',
    //     responsive: [
    //          {
    //              breakpoint: 1200,
    //              settings: {
    //                  slidesToShow: 2
    //              }},
    //         {
    //         breakpoint: 767,
            
    //         settings: {
    //             slidesToShow: 1,
    //             // initialSlide: -1,
    //             centerPadding: '60px'
    //         },
    //         breakpoint: 386,
            
    //         settings: {
    //             slidesToShow: 3,
    //             initialSlide: -1,
    //             centerPadding: '0px'
    //         }
    //     }
    //         // {
    //         // breakpoint: 1200,
    //         // settings: {
    //         //     slidesToShow: 1
    //         // }
    //     // }
    // ]
    });
/*Конец документа*/
});