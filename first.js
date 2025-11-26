
/******************************* Toggle Icon Navbar *******************************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let insta = document.querySelector("#insta")

menuIcon.onclick =() => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}


/******************************* Scroll Reveal *******************************/


ScrollReveal({
    distance: '90px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content,heading', { origin: 'left'});
ScrollReveal().reveal('.home-img , .portfolio-box, .contact form', { origin: 'button'});
ScrollReveal().reveal('.contact form', { origin: 'left'});
ScrollReveal().reveal('.services-container, .services-box', { origin: 'bottom'});
ScrollReveal().reveal('.services-box, #ser-box', { origin: 'left'});
ScrollReveal().reveal('.contact form .textarea',  { origin: 'top'});
ScrollReveal().reveal('.contact form .btn',  { origin: 'right'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content',{ origin: 'right'});
ScrollReveal().reveal('.skill .skill-left' ,{origin: 'left'});
ScrollReveal().reveal('.skill .skill-right' ,{origin: 'right'});
ScrollReveal().reveal('.skill .skill-left .bar' ,{origin: 'top'});
ScrollReveal().reveal('.skill .skill-right .circle' ,{origin: 'bottom'});
ScrollReveal().reveal('.skill h3' ,{origin: 'top'});


/******************************** typed js *******************************/

const typed = new Typed('.multiple-text', {
    strings: [ 'Frontend Developer','Web Developer','Web Designer', 'Backend Developer'],
    typeSpeed: 70,
    backSpeed: 0,
    backDelay: 1500,
    loop: true,
}); 


/******************************* Skill *******************************/

const circles =document.querySelectorAll(".circle");
circles.forEach(elem=> {
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/ dots;

    for(let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML  = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for(let i = 0; i<percent; i++) {
        pointsMarked[i].classList.add("marked")
    }
});