let quizNavigation = document.querySelector('[data-component="navigation"]');
let previousButton = document.querySelector('[data-component="previous"');
let goToPreviousQuestion = function () {
  let newQuestionIndex = currentQuestionIndex - 1;

  if (newQuestionIndex >= 0) {
    showQuestion(newQuestionIndex);
  }
};
let navigationItems = [];

// Attach event for Previous button
previousButton.addEventListener('click', goToPreviousQuestion);

// Build navigation items
for (let i = 0; i < quizData.length; i++) {
  let item = document.createElement('LI');

  item.classList.add('page-item');
  item.innerHTML = `<span class="page-link">${i + 1}</span>`;
  item.addEventListener('click', function () {
    showQuestion(i);
  });

  quizNavigation.append(item);

  // Set active state for the very first item
  if (i === 0) {
    item.classList.add('active');
  }

  // Save the navigation item for later use
  navigationItems.push(item);
}

// When user picks an answer, we need to store the selected answer so we can reuse it later
let updateAttemptedQuestion = function (questionData, selectedAnswer) {
  questionData.attemptedAnswerIndex =
    questionData.answers.indexOf(selectedAnswer);
};

// When question change, we need to check if we navigate back to previous attempted question
// If yes, make sure we disable all answers and display the previous state of the question
let onQuestionChange = function () {
  let questionData = quizData[currentQuestionIndex];

  // Update navigation based on the currentQuestionIndex, this works because the number
  // of navigation items inside navigationItems matches the number of items in quizData array
  for (let i = 0; i < navigationItems.length; i++) {
    let item = navigationItems[i];
    // if matched, we want to make this navigation item "active"
    if (currentQuestionIndex === i) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  }

  // Update Next button state
  // Reaching last item
  if (currentQuestionIndex === quizData.length - 1) {
    nextButton.innerHTML = 'Submit';
  } else {
    nextButton.innerHTML = 'Next';
  }

  // If use has attempted it before, update the current question state
  let attemptedAnswerIndex = questionData.attemptedAnswerIndex;

  if (attemptedAnswerIndex >= 0) {
    let allButtons = answersElement.querySelectorAll('button');

    for (let i = 0; i < allButtons.length; i++) {
      let currentButton = allButtons[i];

      currentButton.disabled = true;

      // This is the answer user has picked before
      if (i === attemptedAnswerIndex) {
        let selectedAnswer = questionData.answers[attemptedAnswerIndex];

        currentButton.classList.remove('btn-outline-secondary');

        // Add the right icon
        if (selectedAnswer.correct) {
          currentButton.classList.add('btn-success');
          currentButton.innerHTML =
            currentButton.innerHTML +
            '<i class="bi bi-check-circle-fill ms-2"></i>';
        } else {
          currentButton.classList.add('btn-danger');
          currentButton.innerHTML =
            currentButton.innerHTML +
            '<i class="bi bi-exclamation-circle-fill ms-2"></i>';
        }
      }
    }
  }
};

// Setup timer
let timer = document.querySelector('[data-component="timer"]');
let getTimeStringFromNumber = function (num) {
  if (num < 10) {
    return `0${num}`;
  }

  return `${num}`;
};
// This formatTime is from CHAT GPT
let formatTime = function (sec) {
  let hours = Math.floor(sec / 3600);
  let minutes = Math.floor((sec - hours * 3600) / 60);
  let seconds = sec - hours * 3600 - minutes * 60;
  let hoursText = getTimeStringFromNumber(hours);
  let minutesText = getTimeStringFromNumber(minutes);
  let secondsText = getTimeStringFromNumber(seconds);

  return `${hoursText}:${minutesText}:${secondsText}`;
};
let seconds = 0;

// Start timer
let timerInterval = setInterval(() => {
  seconds++;

  let formattedTimeString = formatTime(seconds);

  timer.innerHTML = formattedTimeString;
}, 1000);

// Quiz completed
let onQuizComplete = function () {
  // Stop the timer
  clearInterval(timerInterval);

  let formattedTimeString = formatTime(seconds);

  container.innerHTML =
    container.innerHTML +
    `<div class="alert alert-secondary">Your test time is <strong>${formattedTimeString}</strong></div>`;
};
