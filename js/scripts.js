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
    // $('.experts').slick({
    //     autoplay: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     infinite: false,
    //     loop: false,
    //     dots: 0,
    //     speed: 300,
    //     arrows: false,
    //     // centerPadding: '40px',
    //     adaptiveHeight: true,
    //     centerMode: 0,
    //     // initialSlide: -1,
    //     // appendArrows: '.text-revs-arrows-2',
    // //     responsive: [
    // //          {
    // //              breakpoint: 1200,
    // //              settings: {
    // //                  slidesToShow: 2
    // //              }},
    // //         {
    // //         breakpoint: 767,
            
    // //         settings: {
    // //             slidesToShow: 1,
    // //             // initialSlide: -1,
    // //             centerPadding: '60px'
    // //         },
    // //         breakpoint: 386,
            
    // //         settings: {
    // //             slidesToShow: 3,
    // //             initialSlide: -1,
    // //             centerPadding: '0px'
    // //         }
    // //     }
    // //         // {
    // //         // breakpoint: 1200,
    // //         // settings: {
    // //         //     slidesToShow: 1
    // //         // }
    // //     // }
    // // ]
    // });
    $('.experts').owlCarousel({
      items: 1,
      loop: false,
      center: false,
      margin: 40,
      // autoWidth:true,
      nav: true,
      dots:false,
      infinite: false,
      autoHeight: true,
      // URLhashListener:true,
      // autoplayHoverPause:true,
      // startPosition: 'URLHash',
      // responsive:{
      //     0:{
      //         items:4,
      //         center: false
      //         // margin: 20
      //     },
      //     768:{
      //         items:6,
      //         center:false
      //     }
      // }
  });
    $('.medias').owlCarousel({
      items:6,
      loop:true,
      center:true,
      // margin:20,
      autoWidth:true,
      nav: false,
      infinite: false,
      autoHeight: true,
      // URLhashListener:true,
      // autoplayHoverPause:true,
      // startPosition: 'URLHash',
      responsive:{
          0:{
              items:4,
              center: false
              // margin: 20
          },
          768:{
              items:6,
              center:false
          }
      }
  });
    // $('.medias').marquee({
      
      
    //   //если хотите всегда анимировать при помощи jQuery
    //   allowCss3Support: true,
    
    //   //работает, когда allowCss3Support установлено в true - смотрите полный список http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
    //   css3easing: 'linear',
    
    //   //требует jQuery easing плагин. По умолчанию - 'linear'
    //   easing: 'linear',
    
    //   //приостанавливает время перед стартом следующей анимации в миллисекундах
    //   delayBeforeStart: 0,
    //   //'left', 'right', 'up' or 'down'
    //   direction: 'left',
    
    //   //true или false - должен ли marquee быть дублирован для эффекта продолжающегося потока
    //   duplicated: true,
    
    //   //скорость marquee в миллисекундах
    //   duration: 10000,
    
    //   //расстояние в пикселях между бегущими строками
    //   gap: 0,
    
    //   //приостанавливает цикл marquee
    //   pauseOnCycle: false,
    
    //   //приостанавливает marquee при наведении курсора мыши - используя плагин jQuery https://github.com/tobia/Pause
    //   pauseOnHover: false,
    
    //   //marquee виден, когда он изначально позиционирован у границы, по направлении которой будет двигаться
    //   startVisible: false
      
    //   });

       /* Таймер */
  var clock;
  var futureDate = new Date("August 3, 2024 00:00 UTC+3");
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