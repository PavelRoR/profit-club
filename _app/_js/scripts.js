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


       /* Таймер */
  var clock;
  var futureDate = new Date("August 30, 2024 00:00 UTC+3");
  var currentDate = new Date();
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  if (diff < 0) {
      diff = 0;
    //   $('#link').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1508&clean=true&lg=ru').text('Оплатить');
    //   $('.cost-sale, .timer,.prepayment').remove();
    //   $('.cost-full span').addClass('unbroken');
  }

  clock = $('.clock').FlipClock(diff, {
      clockFace: 'HourlyCounter',
      countdown: true,
      language: 'ru',
    //   callbacks: {
    //       stop: function () {
    //         $('#link').attr('href', 'https://shop.mv-centr.ru/?r=ordering/cart/as1&id=1508&clean=true&lg=ru').text('Оплатить');
    //         $('.cost-sale, .timer,.prepayment').remove();
    //   $('.cost-full span').addClass('unbroken');
    //       }
    //   },
  });
/*Конец документа*/
});