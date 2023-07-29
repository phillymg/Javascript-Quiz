var introSectionEl = document.getElementById("intro");
var quizSectionEl = document.getElementById("quiz");
var countdown = 60
var timeLeft = document.getElementById("current-time");
var setInt;
var questionIndex = 0
var choiceContainer = document.querySelector("#choice");
var scoreIndex = 0;
var currentScore = document.querySelector("#currentscore");
var quizOverSectionEl = document.getElementById("quizover");
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
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice3"
    },
    {
        title: "Question 3",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 4",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 5",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 6",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 7",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 8",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 9",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 10",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
    },
    {
        title: "Question 11",
        choices: [
            "Choice1", "Choice2", "Choice3", "Choice4"
        ],
        answer: "Choice4"
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
        if (countdown <= 0) {
            clearInterval(setInt);
        }

    }, 1000)
}


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
    //questionIndex++
    //hide the current question and display the next question
    displayQuestion();
    displayChoices();
}


choiceContainer.addEventListener("click", (e) => {
    //When I click an option, I want to read the text content to see if it matches the answer property from the questions array
    console.log(e.target.id, questionIndex);
    if (e.target.tagName !== "BUTTON") {
        return
    }
    let optionText = e.target.textContent
    //console.log(optionText)
    if (optionText === questions[questionIndex].answer) {
        scoreIndex++
        currentScore.textContent = scoreIndex

    } else {
        if (countdown <= 9) {
            countdown -= countdown
        } else {
            countdown -= 10
        }
    };
    questionIndex++
    doSubmit();
})

document.getElementById("start-btn").addEventListener("click", startQuiz);

function quizComplete() {
    quizSectionEl.style.display = "none";
    quizOverSectionEl.style.display = "block";
}

if (countdown === 0 || )