
const swipperGeneral = new Swiper(".elementor-image-carousel-wrapper-1", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


const swipperGeneral2 = new Swiper(".elementor-image-carousel-wrapper-2", {
    slidesPerView: 7,
    loopedSlides: 4,
    centeredSlides: false,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

