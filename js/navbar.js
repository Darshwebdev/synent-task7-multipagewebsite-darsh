// ==========================================
// DEVLAUNCH NAVBAR
// ==========================================

// Navbar
const navbar = document.querySelector(".navbar");

// ==========================================
// Sticky Navbar
// ==========================================

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

// ==========================================
// Active Navigation
// ==========================================

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active");

    }

});

// ==========================================
// Hover Animation
// ==========================================

navLinks.forEach((link) => {

    link.addEventListener("mouseenter", () => {

        link.style.transition = ".3s";

    });

});

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// Navbar Button Effect
// ==========================================

const navButton =
    document.querySelector(".navbar .primary-btn");

if (navButton) {

    navButton.addEventListener("mouseenter", () => {

        navButton.style.transform =
            "translateY(-3px)";

    });

    navButton.addEventListener("mouseleave", () => {

        navButton.style.transform =
            "translateY(0)";

    });

}

// ==========================================
// Logo Click
// ==========================================

const logo =
    document.querySelector(".logo");

if (logo) {

    logo.style.cursor = "pointer";

    logo.addEventListener("click", () => {

        window.location.href = "index.html";

    });

}