document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#555";
        } else {
            navbar.style.backgroundColor = "#333";
        }

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 60;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }

        });

    });

});