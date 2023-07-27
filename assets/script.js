var introSectionEl = document.getElementById("intro");
var quizSectionEl = document.getElementById("quiz");
var countdown = 60
var timeLeft = document.getElementById("current-time");
var setInt;
var questionIndex = 0
//document.getElementById("choice")=
var questions = [
    {
        title: "Question 1",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice2"
    },
    {
        title: "Question 2",
        choices: [
            "Choice2.1", "Choice2.2", "Choice2.3", "Choice2.4"
        ],
        answer: "Choice3"
    },
    {
        title: "Question 3",
        choices: [
            "Choice3.1", "Choice3.2", "Choice3.3", "Choice3.4"
        ],
        answer: "Choice3"
    }
]

function startQuiz() {
    introSectionEl.style.display = "none";
    quizSectionEl.style.display = "block";
    timer();
    displayQuestion();
    displayChoices();
}

function timer() {
    setInt = setInterval(function () {
        timeLeft.textContent = countdown;
        countdown--;
        if (countdown === 0) {
            clearInterval(setInt);
        }
    }, 1000)
}

//When I click an option, the quiz will continue on to the next question and display either "Correct" or "Incorrect at the bottom"


function displayQuestion() {
    document.getElementById("question").textContent = questions[questionIndex].title
}

function displayChoices() {
    document.getElementById("choice-1").textContent = questions[questionIndex].choices[0]
    document.getElementById("choice-2").textContent = questions[questionIndex].choices[1]
    document.getElementById("choice-3").textContent = questions[questionIndex].choices[2]
    document.getElementById("choice-4").textContent = questions[questionIndex].choices[3]

}

function doSubmit() {
    questionIndex++
    //hide the current question and display the next question
    displayQuestion();
    displayChoices();
}



document.getElementById("start-btn").addEventListener("click", startQuiz);

document.getElementById("submit-btn").addEventListener("click", doSubmit);