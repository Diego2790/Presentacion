/* NAVIGATION BAR FUNCTION */
    function myMenuFunction(){
        var menuBtn = document.getElementById("myNavMenu");

        if(menuBtn.className === "nav-menu"){
            menuBtn.className += " responsive";
        } else {
            menuBtn.className = "nav-menu";

        }
    }

/* Add shadow on navigation bar while scrolling */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
        const navHeader = document.getElementById("header");

        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navHeader.style.boxShadow= "0 1px 6px rgba(0, 0, 0, 0.1)";
            navHeader.style.height = "70px";
            navHeader.style.lineHeight = "70px";
        } else{
            navHeader.style.boxShadow= "none";
            navHeader.style.height = "90px";
            navHeader.style.lineHeight = "90px";
        }
    }

/* Typing effect */
    var typingEffect = new Typed('.typedText', {
        strings: ["Project", "Product", "Digital"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        cursorChar: '|',
    });

/* Scroll reveal animation */
    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true,
    });

/* Home */
sr.reveal(".featured-text-card", {})
sr.reveal(".featured_name", {delay: 100})
sr.reveal(".featured-text-info", {delay: 200})
sr.reveal(".featured-text-btn", {delay: 200})
sr.reveal(".social_icons", {delay: 200})
sr.reveal(".featured-image", {delay: 300})

/* Project Box */
sr.reveal(".project-box", {interval: 200})

/* Headings */
sr.reveal(".top-header", {})

/* About Info */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100})
srLeft.reveal(".contact-info", {delay: 100})

/* About Skills  */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
})

srRight.reveal(".skills-box", {delay: 100})
srRight.reveal(".form-control", {delay: 100})

/* Change active link */
    const sections = document.querySelectorAll("section[id]")

    function scrollActive(){
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight, 
            sectionTop = current.offsetTop - 50, 
            sectionId = current.getAttribute("id");

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
            } else{
                document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
            }
        })
    }

    window.addEventListener("scroll", scrollActive)

/* Enviar mail a mi correo */
    function sendEmail(event) {
        event.preventDefault(); // Evita que el formulario recargue la página

        // Obtén los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Construye el enlace mailto
        const mailtoLink = `mailto:diego_marchand@hotmail.es?subject=${encodeURIComponent(`Nombre: ${name}, Email: ${email}`)}&body=${encodeURIComponent(message)}`;

        // Redirige al cliente de correo (Gmail u otro predeterminado)
        window.location.href = mailtoLink;
    }