
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
    loop: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
    },
});



const btnCategories = document.getElementById('btn-categories');

btnCategories.addEventListener('click', function(event) {
    event.preventDefault();
    const divElement = document.querySelector('.wd-sticky-nav');
    divElement.classList.add('wd-opened','scroll-y');

});

const divElement = document.querySelector('.wd-sticky-nav');


function addOpenedClass() {
    divElement.classList.add('wd-opened','scroll-y');
}

function removeOpenedClass() {
    divElement.classList.remove('wd-opened','scroll-y');
}

// Agregar un event listener para el evento mouseover
divElement.addEventListener('mouseover', addOpenedClass);

// Agregar un event listener para el evento mouseout
divElement.addEventListener('mouseout', removeOpenedClass);



const menuMobile = document.getElementById('menu-mobile');

menuMobile.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("on click")
    const divElement = document.querySelector('.mobile-nav');
    divElement.classList.add('wd-opened');

});

const menuMobile2 = document.getElementById('menu-mobile-2');

menuMobile2.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("on click")
    const divElement = document.querySelector('.mobile-nav');
    divElement.classList.add('wd-opened');

});


