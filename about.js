let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down - hide navbar
        navbar.style.top = '-200px'; // Hide by moving it above the view
    } else {
        // Scroll up - show navbar
        navbar.style.top = '20px'; // Adjust according to your margin-top
    }

    lastScrollTop = scrollTop;
});


function loaderAnimations() {
    var loader = document.querySelector("#loaders")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
menuAnimation()
loaderAnimations() 