// ==========================================
// DEVLAUNCH CONTACT PAGE
// ==========================================

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");

const emailInput = document.getElementById("email");

const subjectInput = document.getElementById("subject");

const messageInput = document.getElementById("message");

const successMessage =
    document.getElementById("successMessage");

const charCount =
    document.getElementById("charCount");

// ==========================================
// Character Counter
// ==========================================

const MAX_CHARACTERS = 500;

messageInput.addEventListener("input", () => {

    let length = messageInput.value.length;

    charCount.textContent =
        `${length} / ${MAX_CHARACTERS} characters`;

    if(length >= MAX_CHARACTERS){

        messageInput.value =
            messageInput.value.substring(0, MAX_CHARACTERS);

    }

});

// ==========================================
// Email Validation
// ==========================================

function isValidEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

// ==========================================
// Form Submission
// ==========================================

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
        nameInput.value.trim();

    const email =
        emailInput.value.trim();

    const subject =
        subjectInput.value.trim();

    const message =
        messageInput.value.trim();

    if(

        name==="" ||

        email==="" ||

        subject==="" ||

        message===""

    ){

        alert("Please fill in all fields.");

        return;

    }

    if(!isValidEmail(email)){

        alert("Please enter a valid email.");

        return;

    }

    successMessage.textContent =
        "✅ Thank you! Your message has been sent successfully.";

    successMessage.style.color =
        "#22C55E";

    successMessage.style.marginTop =
        "20px";

    contactForm.reset();

    charCount.textContent =
        `0 / ${MAX_CHARACTERS} characters`;

    setTimeout(()=>{

        successMessage.textContent="";

    },4000);

});

// ==========================================
// Input Focus Animation
// ==========================================

const inputs =
    document.querySelectorAll(
        "input, textarea"
    );

inputs.forEach((input)=>{

    input.addEventListener("focus",()=>{

        input.parentElement.style.transform =
            "translateY(-2px)";

    });

    input.addEventListener("blur",()=>{

        input.parentElement.style.transform =
            "translateY(0px)";

    });

});

// ==========================================
// Scroll Reveal
// ==========================================

const revealElements =
    document.querySelectorAll(

        ".contact-card, .hour-card, .form-container, .contact-side"

    );

const observer =
    new IntersectionObserver(

        (entries)=>{

            entries.forEach((entry)=>{

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";

                    entry.target.style.transform=
                        "translateY(0)";

                }

            });

        },

        {

            threshold:0.15

        }

    );

revealElements.forEach((element)=>{

    element.style.opacity="0";

    element.style.transform="translateY(30px)";

    element.style.transition=".6s ease";

    observer.observe(element);

});