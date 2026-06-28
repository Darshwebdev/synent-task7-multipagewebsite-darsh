// Select all FAQ questions
const questions = document.querySelectorAll(".question");

// Add click event to every question
questions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentAnswer = question.nextElementSibling;

        // Close all other open answers
        questions.forEach((item) => {

            if(item !== question){
                item.nextElementSibling.classList.remove("show");
            }

        });

        // Toggle current answer
        currentAnswer.classList.toggle("show");

    });

});