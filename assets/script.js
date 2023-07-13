const questions = [
    {
        q: "What is 2 + 2?"
        a: [
            {text: "6", isCorrect: false},
            {text: "3", isCorrect: false},
            {text: "22", isCorrect: false},
            {text: "4", isCorrect: true}
        ]

    },
    {
        q: "What is 4 + 2?"
        a: [
            {text: "6", isCorrect: true},
            {text: "3", isCorrect: false},
            {text: "42", isCorrect: false},
            {text: "4", isCorrect: false}
        ]

    },
    {
        q: "What is 2 - 1?"
        a: [
            {text: "6", isCorrect: false},
            {text: "1", isCorrect: true},
            {text: "21", isCorrect: false},
            {text: "4", isCorrect: false}
        ]

    }
]

let currentQuestion = 0
let score = 0

function loadQues () {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    
}