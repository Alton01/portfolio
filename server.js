/*toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* scroll sections active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

/* sticky navbar */

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*remove toggle icon and navbar when clicked navbar link (scroll) */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/* scroll reveal functionality gotten from scrollrevealjs.org*/

/*change reset to false if you do not want the scrollreveal property to happen more than once. 
setting it to falsealso correctsthewrong alignment on page */

ScrollReveal({
        reset: false,
        distance: '80px',
        duration: 2000,
        delay: 200
});


/* this is used to target sections within page with scroll functionality  and directions of scroll*/

ScrollReveal().reveal('.home-content', { origin: 'left' });
ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .about-img', { origin: 'right'});
ScrollReveal().reveal('.services-box, .portfolio-box, .about-content, .contact form', { origin: 'bottom' });



    /* this is for typed.js typing functionality */

const typed = new Typed('.multiple-text', {
        strings: ['Full-Stack Developer', 'MERN-Stack Developer', 'IT Expert', 'No-Code Developer', 'Database Manager'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
});



//////////////////////FOR SENDING EMAIL/////////////////////

function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        number: document.getElementById("number").value ,
        subject: document.getElementById("subject").value ,
        message: document.getElementById("message").value ,
    };
    const serviceID = "service_yuulu6v";
    const templateID = "template_k53y3yw";


    emailjs.send(serviceID, templateID, params)
    .then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert ("Your message was successfully sent!!!");
    })
    .catch((err) => console.log(err));
    }

