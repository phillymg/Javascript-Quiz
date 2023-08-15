var introSectionEl = document.getElementById("intro");
var quizSectionEl = document.getElementById("quiz");
var countdown = 59
var timeLeft = document.getElementById("current-time");
var setInt;
var questionIndex = 0
var choiceContainer = document.querySelector("#choice");
var scoreIndex = 0;
var currentScore = document.querySelector("#currentscore");
var quizOverSectionEl = document.getElementById("quizover");
var finalScore = document.querySelector("#finalscore")
var scoreListEl = document.querySelector("#scorelist")
var submitInitials = document.getElementById("submitinitials");
var timerDipslay = document.getElementById("timerdisplay");
var scoreBoardEl = document.getElementById("scorelist");
var restartButton = document.getElementById("restartbtn");
//document.getElementById("choice")=
var questions = [
    {
        title: "How do you refer to a <div> element with an id of 'practiceid'? ",
        choices: [
            "document.querySelector('.practiceid')", "func selectID {practiceid}", "document.querySelector('#practiceid')", "document.getElementById('practid')"
        ],
        answer: "document.querySelector('#practiceid')"
    },
    {
        title: "Where do you link a javascript file to your HTML?",
        choices: [
            "Right above the CSS file in the <head> element", "Beneath all your code in the <body>", "Right below the CSS file in the <head> element", "You don't"
        ],
        answer: "Beneath all your code in the <body>"
    },
    {
        title: "What should you use to equate two variables with the same value but different type?",
        choices: [
            "===", "==", "=", "<="
        ],
        answer: "=="
    },
    {
        title: "Which keyword refers to an object that is executing the current piece of code?",
        choices: [
            "this", "those", "that", "these"
        ],
        answer: "this"
    },
    {
        title: "What should one use to check if an element is within another element?",
        choices: [
            "includes() method", "isInside() method", "isWithin() method", "contains() method",
        ],
        answer: "contains() method"
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
]


function startQuiz() {
    introSectionEl.style.display = "none";
    quizSectionEl.style.display = "block";
    timerDipslay.style.display = "block";

    timer();
    displayQuestion();
    displayChoices();
}

quizOverSectionEl.style.display = "none";
timerDipslay.style.display = "none";
scoreBoardEl.style.display = "none";

function timer() {
    setInt = setInterval(function () {
        timeLeft.textContent = countdown;
        countdown--;

        if (countdown <= 0) {
            clearInterval(setInt);
            quizComplete();
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
            countdown -= countdown;
        } else {
            countdown -= 10
        }
    };
    if (questionIndex === 9) {
        clearInterval(setInt);
        quizComplete();
        return;
    }
    questionIndex++;
    doSubmit();
})

document.getElementById("start-btn").addEventListener("click", startQuiz);

function quizComplete() {
    quizSectionEl.style.display = "none";
    quizOverSectionEl.style.display = "block";
    finalScore.innerHTML = ("Final score: ") + currentScore.innerHTML;
}

function displayScores() {
    console.log("test")
}



function saveScoreToStorage(score) {
    // read
    let scoreEntryArray;
    const scoresFromStorage = JSON.parse(localStorage.getItem("quiz-scores"));

    // modify
    if (!scoresFromStorage || scoresFromStorage.length === 0) {
        scoreEntryArray = [score]
    } else {
        scoreEntryArray = [...scoresFromStorage, score]
    }
    // write
    localStorage.setItem("quiz-scores", JSON.stringify(scoreEntryArray));
    const table = document.getElementById("scoreboard");
    scoreEntryArray.sort((a, b) => b.points - a.points);
    for (let i = 0; i < 10; i++) {
        if (!scoreEntryArray[i]) {
            return;
        }

        let Tr = document.createElement("tr");
        let TdInit = document.createElement("td");
        let TdScore = document.createElement("td");

        Tr.append(TdInit, TdScore);
        TdInit.textContent = scoreEntryArray[i].initials;
        TdScore.textContent = scoreEntryArray[i].points;
        table.append(Tr);
    }

}

submitInitials.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(submitInitials);

    const score = {
        initials: formData.get("initials"),
        points: scoreIndex
    }
    saveScoreToStorage(score);
    quizOverSectionEl.style.display = "none";
    timerDipslay.style.display = "none";

    scoreBoardEl.style.display = "block";
});

restartButton.addEventListener("click", (e) => {
    location.reload()
})
