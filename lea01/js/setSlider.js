var slider = document.querySelectorAll('#slider .slider__item');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slider[currentSlide].className = 'slider__item';
    currentSlide = (n+slider.length)%slider.length;
    slider[currentSlide].className = 'slider__item showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};