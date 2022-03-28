
const questions = document.querySelectorAll(".question");

for(let question of questions) {
    question.addEventListener("click", () => {
        let arrow = question.firstChild.nextSibling;
        let answer = question.nextElementSibling;

        // check if question clicked is already opened; if so, close it
        if(question.classList.contains("active")) {
            question.classList.remove("active");
            arrow.classList.remove("open");
            answer.classList.add("hidden");
        } else {
            // check if another question is open; if so, close it
            questions.forEach(question => {
                let arrow = question.firstChild.nextSibling;
                let answer = question.nextElementSibling;
                
                if(question.classList.contains("active")) {
                    question.classList.remove("active");
                    arrow.classList.remove("open");
                    answer.classList.add("hidden");  
                }
            })

            // open the question that was clicked
            question.classList.add("active");
            arrow.classList.add("open");
            answer.classList.remove("hidden");
        }
    })
}

