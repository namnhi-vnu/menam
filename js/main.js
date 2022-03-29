const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,

    grid: {
        rows: 2,
    },
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});
const bemac = new Swiper(".bemac", {
    slidesPerView: 3,

    grid: {
        rows: 2,
    },
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});