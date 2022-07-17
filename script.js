window.addEventListener('scroll', function () {
    let header = document.querySelector('.main-header');
    let windowPosition = window.scrollY;
    console.log(windowPosition);
    if (windowPosition > 900){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
})
var mobile_sidebar = document.getElementById("mobile-sidebar");
var mobile_burger = document.getElementById("menu-btn");

mobile_burger.onclick = function() {
    if(mobile_sidebar.classList.contains('open')){
        mobile_sidebar.style.marginRight = "-50%";
        mobile_sidebar.classList.remove('open');
        mobile_burger.classList.remove('open');
    } else {
        mobile_sidebar.style.marginRight = "0%";
        mobile_sidebar.classList.add('open');
        mobile_burger.classList.add('open');
    }
};

VANTA.BIRDS({
    el: "#vanta-section",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color1: 0x175719,
    color2: 0x0,
    birdSize: 0.80,
    speedLimit: 4.00,
    separation: 75.00,
    alignment: 51.00,
    cohesion: 50.00,
    quantity: 4.00,
    backgroundAlpha: 0.00
});