
var main = document.querySelector("#main")
var crsr = document.querySelector("#cursur")

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

var page2 = document.querySelector("#page2")
var crsr2 = document.querySelector("#cursur2")

page2.addEventListener("mousemove", function(dets){
    crsr2.style.left = dets.x+"px"
    crsr2.style.top = dets.y+"px"
  
})
page2.addEventListener("mouseleave", function () {
    crsr2.style.display = "none"
})
page2.addEventListener("mouseenter", function () {
    crsr2.style.display = "block"
})

function loaderAnimation() {
    var loader = document.querySelector("#loader")
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

const contactBtn = document.getElementById('contactBtn');
const contactSection = document.getElementById('page4');
contactBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    contactSection.scrollIntoView({ behavior: 'smooth' });
});

const work = document.getElementById('work');
const worksection = document.getElementById('page3');
work.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    worksection.scrollIntoView({ behavior: 'smooth' });
});

menuAnimation()
loaderAnimation()
