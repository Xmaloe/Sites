const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
    delay: 3000, 
    disableOnInteraction: false,
},
});