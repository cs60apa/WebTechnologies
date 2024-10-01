const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Paris', correct: true },
            { text: 'Lisbon', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        answers: [
            { text: 'Harper Lee', correct: true },
            { text: 'Mark Twain', correct: false },
            { text: 'Ernest Hemingway', correct: false },
            { text: 'F. Scott Fitzgerald', correct: false }
        ]
    },
    {
        question: 'What is the largest ocean on Earth?',
        answers: [
            { text: 'Atlantic Ocean', correct: false },
            { text: 'Indian Ocean', correct: false },
            { text: 'Arctic Ocean', correct: false },
            { text: 'Pacific Ocean', correct: true }
        ]
    }
];

let currentQuestionIndex = 0;

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        alert('Correct!');
    } else {
        alert('Wrong!');
    }

    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        alert('Quiz finished!');
        startGame();
    }
});

startGame();
