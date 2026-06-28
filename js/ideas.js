// ==========================================
// DEVLAUNCH - IDEAS PAGE
// ==========================================

// Elements
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const ideaCards = document.querySelectorAll(".idea-card");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// ==========================================
// Initially Show Only First 8 Cards
// ==========================================

const INITIAL_CARDS = 8;

ideaCards.forEach((card, index) => {

    if (index >= INITIAL_CARDS) {
        card.style.display = "none";
    }

});

// ==========================================
// Live Search
// ==========================================

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    ideaCards.forEach((card) => {

        const title =
            card.querySelector("h3").textContent.toLowerCase();

        const description =
            card.querySelector("p").textContent.toLowerCase();

        if (
            title.includes(value) ||
            description.includes(value)
        ) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});

// ==========================================
// Category Filters
// ==========================================

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach((btn) => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const category =
            button.textContent.trim().toLowerCase();

        ideaCards.forEach((card) => {

            const badge =
                card.querySelector(".category");

            const text =
                badge.textContent.toLowerCase();

            if (category === "all") {

                card.style.display = "flex";

            }

            else if (text.includes(category)) {

                card.style.display = "flex";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

// ==========================================
// Load More
// ==========================================

let visibleCards = INITIAL_CARDS;

loadMoreBtn.addEventListener("click", () => {

    visibleCards += 4;

    ideaCards.forEach((card, index) => {

        if (index < visibleCards) {

            card.style.display = "flex";

        }

    });

    if (visibleCards >= ideaCards.length) {

        loadMoreBtn.textContent =
            "No More Ideas";

        loadMoreBtn.disabled = true;

        loadMoreBtn.style.opacity = ".6";

        loadMoreBtn.style.cursor =
            "not-allowed";

    }

});

// ==========================================
// Learn More Buttons
// ==========================================

const learnButtons =
    document.querySelectorAll(".idea-card button");

learnButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const title =
            button.parentElement.querySelector("h3").textContent;

        alert(
            `${title}\n\nDetailed startup descriptions will be available in a future version of DevLaunch.`
        );

    });

});

// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document
            .querySelector(this.getAttribute("href"))
            ?.scrollIntoView({

                behavior: "smooth"

            });

    });

});

// ==========================================
// Small Fade-in Animation
// ==========================================

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {

        threshold: 0.2

    }

);

ideaCards.forEach((card) => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(30px)";

    card.style.transition =
        ".5s ease";

    observer.observe(card);

});