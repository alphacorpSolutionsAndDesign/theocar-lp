document.addEventListener('DOMContentLoaded', () => {
    const carouselHeader = document.getElementById("carouselHeader");
    const carouselHeaderIndicators = document.querySelector(".carousel-indicators button");
    
    carouselHeader.addEventListener('slid.bs.carousel', () => {
        carouselHeaderIndicators.forEach((btn) => {
            if (btn.classList.contains("active")) {
                btn.classList.remove('fade-out');
                btn.classList.add('fade-in');
            } else {
                btn.classList.remove('fade-in');
                btn.classList.add('fade-out')
            }
        });
    });
});