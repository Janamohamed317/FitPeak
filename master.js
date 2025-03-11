document.addEventListener("DOMContentLoaded", function () {
    let carouselElement = document.querySelector("#tipsCarousel");
    let carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, 
        ride: "carousel"
    });
});
