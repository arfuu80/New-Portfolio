let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");
let txts = document.querySelector("#firsttxt")

var cursor = document.querySelector('.cursor'),
 cursorScale = document.querySelectorAll('.cursor49',),

   
   
    mouseX = 0,
    mouseY = 0

gsap.to({}, 0.016, {
    repeat: -1,

    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('full');
    const closeIcon = document.querySelector('.ri-close-large-line');
    let nav  = document.getElementById("full")

    // Function to show the sidebar
    function showSidebar() {
        sidebar.style.right = '0';
    }

    // Function to hide the sidebar
    function hideSidebar() {
        if (window.innerWidth <= 400) {
            sidebar.style.right = '-100%';
        } else {
            sidebar.style.right = '-33%';
        }
    }

    
  
    // Example trigger to show the sidebar (you can replace this with your own trigger)
    document.querySelector('.open-sidebar').addEventListener('click', showSidebar);

    // Close the sidebar when the close icon is clicked
    closeIcon.addEventListener('click', hideSidebar);
});


window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY
});

cursorScale.forEach(link => {
    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if(link.classList.contains('small')){
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });
});


let tl = gsap.timeline()
tl.to("#full",{
    right:0,
    duration:1
})
tl.from("#full h4",{
    x:150,
    duration:0.8,
    stagger:0.5,
    opacity:0


})
tl.from("#full i",{
   
    opacity:0


})


tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})
cross.addEventListener("click", function(){
    tl.reverse()
})
loaderAnimation()
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

















































// Header Scroll
// let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
} 

// nav hide 
// let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})