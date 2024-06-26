// Provided data
let quizData = [
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'High Text Markup Language', correct: false },
      { text: 'Hyper Tabular Markup Language', correct: false },
      { text: 'None of these', correct: false },
    ],
  },
  {
    question: 'Which language runs in a web browser?',
    answers: [
      { text: 'Java', correct: false },
      { text: 'C', correct: false },
      { text: 'Python', correct: false },
      { text: 'JavaScript', correct: true },
    ],
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Central Style Sheets', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Cascading Simple Sheets', correct: false },
      { text: 'Cars SUVs Sailboats', correct: false },
    ],
  },
  {
    question: 'What year was JavaScript launched?',
    answers: [
      { text: '1996', correct: false },
      { text: '1995', correct: true },
      { text: '1994', correct: false },
      { text: 'none of the above', correct: false },
    ],
  },
  {
    question: 'Which tool can you use to ensure code quality?',
    answers: [
      { text: 'Angular', correct: false },
      { text: 'jQuery', correct: false },
      { text: 'RequireJS', correct: false },
      { text: 'ESLint', correct: true },
    ],
  },
];

let container = document.querySelector('[data-component="container"]');
let questionElement = document.querySelector('[data-component="question"]');
let answersElement = document.querySelector('[data-component="answers"]');
let nextButton = document.querySelector('[data-component="next"]');
let currentQuestionIndex = 0;
let score = 0;

function showQuestion(questionIndex) {
  currentQuestionIndex = questionIndex;

  let questionData = quizData[currentQuestionIndex];
  let question = questionData.question;
  let answers = questionData.answers;

  questionElement.innerHTML = `<span class="fw-bold">Question ${
    currentQuestionIndex + 1
  }.</span> ${question}`;
  answersElement.innerHTML = '';

  for (let i = 0; i < answers.length; i++) {
    let currentAnswer = answers[i];
    let button = document.createElement('button');

    button.textContent = currentAnswer.text;
    button.classList.add('btn', 'btn-outline-secondary', 'd-block');
    button.addEventListener('click', function () {
      selectAnswer(button, currentAnswer);

      // ******************
      // Advanced
      // ******************
      if (typeof updateAttemptedQuestion !== 'undefined') {
        updateAttemptedQuestion(questionData, currentAnswer);
      }
    });

    answersElement.appendChild(button);
  }

  // ******************
  // Advanced
  // ******************
  if (typeof onQuestionChange !== 'undefined') {
    onQuestionChange();
  }
}

function selectAnswer(button, answer) {
  let allButtons = answersElement.querySelectorAll('button');

  for (let i = 0; i < allButtons.length; i++) {
    let currentButton = allButtons[i];

    currentButton.disabled = true;
  }

  button.classList.remove('btn-outline-secondary');

  if (answer.correct) {
    button.classList.add('btn-success');
    button.innerHTML =
      button.innerHTML + '<i class="bi bi-check-circle-fill ms-2"></i>';
    score = score + 1;
  } else {
    button.classList.add('btn-danger');
    button.innerHTML =
      button.innerHTML + '<i class="bi bi-exclamation-circle-fill ms-2"></i>';
  }
}

function nextQuestion() {
  let nextQuestionIndex = currentQuestionIndex + 1;

  if (nextQuestionIndex < quizData.length) {
    showQuestion(nextQuestionIndex);
  } else {
    container.innerHTML = `
        <h2>Quiz completed!</h2>
        <div class="alert alert-primary mt-2">Your score is <span class="fw-bold">${score} / ${quizData.length}</span></div>
      `;

    // ******************
    // Advanced
    // ******************
    if (typeof onQuizComplete !== 'undefined') {
      onQuizComplete();
    }
  }
}

nextButton.addEventListener('click', nextQuestion);

// Start with the first question
showQuestion(0);
