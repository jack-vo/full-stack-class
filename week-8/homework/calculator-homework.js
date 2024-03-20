let inputEquation = document.querySelector('.input-equation');
let input = document.querySelector('.calculator-input');
let buttons = document.querySelectorAll('.calculator-btn');
let operatorButtons = document.querySelectorAll('.operator-btn');
let inputHistory = document.querySelector('.input-history');
let inputHistoryButton = document.querySelector('.input-history-button');
let inputHistoryList = document.querySelector('.input-history-list');
let calculateResult = function () {
  let inputValue = input.value;
  let result = '';

  try {
    result = eval(inputValue);
  } catch (e) {
    result = 'ERROR';
  }

  if (result === 'ERROR') {
    inputEquation.innerHTML = '';
  } else {
    inputEquation.innerHTML = inputValue;
    addItemToInputHistoryList(inputValue, result);
  }

  input.value = result;
};
let clearInput = function () {
  input.value = '';
  inputEquation.innerHTML = '';
};
let deleteLastInput = function () {
  input.value = input.value.slice(0, -1);
};
let onCalculatorButtonClick = function (event) {
  let action = event.currentTarget.textContent;

  processCalculatorWithAction(action);
};
let addNewInputValue = function (action) {
  let inputValue = input.value;

  if (isLastCharacterAnOperator(inputValue) && isOperator(action)) {
    return;
  }

  let newValue = inputValue + action;

  input.value = newValue;
};
let processCalculatorWithAction = function (action) {
  if (action === '=') {
    calculateResult();
  } else if (action === 'AC') {
    clearInput();
  } else if (action === 'DEL') {
    deleteLastInput();
  } else {
    addNewInputValue(action);
  }

  if (isLastCharacterAnOperator(input.value)) {
    setOperatorButtonsDisabled(true);
  } else {
    setOperatorButtonsDisabled(false);
  }
};

for (let i = 0; i < buttons.length; i++) {
  let currentButton = buttons[i];

  currentButton.addEventListener('click', onCalculatorButtonClick);
}

// ========================
// INPUT VALIDATION
// ========================
let operators = ['+', '-', '*', '/', '.'];

let setOperatorButtonsDisabled = function (disabled) {
  for (let i = 0; i < operatorButtons.length; i++) {
    let operatorButton = operatorButtons[i];

    operatorButton.disabled = disabled;
  }
};
let isLastCharacterAnOperator = function (inputValue) {
  let operators = ['+', '-', '*', '/', '.'];
  let lastCharacter = inputValue[inputValue.length - 1];

  return operators.includes(lastCharacter);
};

function isOperator(action) {
  return operators.includes(action);
}

// ========================
// KEYBOARD
// ========================
let onBodyKeyUp = function (event) {
  let key = event.key;
  let action;

  if (key === 'Enter') {
    action = '=';
  } else if (key === 'Escape') {
    action = 'AC';
  } else if (key === 'Backspace') {
    action = 'DEL';
  } else {
    action = key;
  }

  let acceptableActions = [];

  for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i];
    let buttonText = currentButton.textContent;

    acceptableActions.push(buttonText);
  }

  if (acceptableActions.includes(action)) {
    processCalculatorWithAction(action);
  }
};
document.body.addEventListener('keyup', onBodyKeyUp);

// ===========================================
// HISTORY LIST
// ===========================================
let addItemToInputHistoryList = function (equation, value) {
  let div = document.createElement('DIV');

  div.innerHTML = `${equation}=${value}`;
  div.addEventListener('click', onInputHistoryItemClick);

  inputHistoryList.appendChild(div);
};
let onInputHistoryButtonClick = function () {
  if (inputHistory.classList.contains('open')) {
    inputHistory.classList.remove('open');
  } else {
    inputHistory.classList.add('open');
  }
};

let onInputHistoryItemClick = function (event) {
  let target = event.target;
  let content = target.textContent;
  let items = content.split('=');
  let equation = items[0];
  let value = items[1];

  inputEquation.innerHTML = equation;
  input.value = value;

  inputHistory.classList.remove('open');
};

inputHistoryButton.addEventListener('click', onInputHistoryButtonClick);
