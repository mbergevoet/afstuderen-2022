const one = localStorage.getItem("answerOne");
const four = localStorage.getItem("answerFour");
const five = localStorage.getItem("answerFive");
const seven = localStorage.getItem("answerSeven");
const nine = localStorage.getItem("answerNine");
const multipleChoiceContainer = document.querySelectorAll(".multiple-choice");

setTimeout(() => {
    multipleChoiceContainer[0].classList.add(one);
    multipleChoiceContainer[1].classList.add(four);
    multipleChoiceContainer[2].classList.add(five);
    multipleChoiceContainer[3].classList.add(seven);
    multipleChoiceContainer[4].classList.add(nine);
}, 500);

