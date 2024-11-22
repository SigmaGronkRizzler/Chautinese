let quiz = [];
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    fetch('/get_quiz')
        .then(response => response.json())
        .then(data => {
            quiz = data;
            displayQuestion();
        });
});

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const resultElement = document.getElementById("result");

    // Clear previous data
    optionsElement.innerHTML = '';
    resultElement.textContent = '';
    nextButton.style.display = 'none';

    if (currentQuestionIndex < quiz.length) {
        const currentQuestion = quiz[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        currentQuestion.options.forEach(option => {
            const li = document.createElement("li");
            li.textContent = option;
            li.onclick = () => checkAnswer(option, currentQuestion.answer);
            optionsElement.appendChild(li);
        });
    } else {
        // Quiz finished
        questionElement.textContent = "Quiz Complete!";
        resultElement.textContent = `Your score: ${score} / ${quiz.length}`;
    }
}

function checkAnswer(selected, correct) {
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");

    if (selected === correct) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = `Wrong! Correct answer: ${correct}`;
        resultElement.style.color = "red";
    }

    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}
