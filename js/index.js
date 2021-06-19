// banner轮播图
var swiper2 = new Swiper('.swiper-banner', {
    loop: true,
    // freeMode: true,
    slidesPerView: 1,
    loopedSlides: 1,
    speed: 1500,
    autoplay: {
        delay: 3000,
        // disableOnInteraction: false,
      },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
});



//底部轮播图
var swiper = new Swiper('.swiper-container', {
    loop: true,
    freeMode: true,
    slidesPerView: 'auto',
    loopedSlides: 2,
    speed: 1500,
    autoplay: {
        delay: 3000,
        // disableOnInteraction: false,
    },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$