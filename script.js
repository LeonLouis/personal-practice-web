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