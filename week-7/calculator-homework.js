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
let processCalculatorWithAction = function (action) {
  if (action === '=') {
    calculateResult();
  } else if (action === 'AC') {
    clearInput();
  } else if (action === 'DEL') {
    deleteLastInput();
  } else {
    let inputValue = input.value;

    let newValue = inputValue + action;

    input.value = newValue;
  }

  if (isLastInputAnOperator(input.value)) {
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
function setOperatorButtonsDisabled(disabled) {
  for (let i = 0; i < operatorButtons.length; i++) {
    let operatorButton = operatorButtons[i];

    operatorButton.disabled = disabled;
  }
}
function isLastInputAnOperator(inputValue) {
  const operators = ['+', '-', '*', '/', '.'];
  const lastCharacter = inputValue[inputValue.length - 1];

  return operators.includes(lastCharacter);
}

// ========================
// KEYBOARD
// ========================
let onBodyKeyUp = function (e) {
  let key = e.key;
  let action = key;

  if (key === 'Enter') {
    action = '=';
  } else if (key === 'Escape') {
    action = 'AC';
  } else if (key === 'Backspace') {
    action = 'DEL';
  }

  let acceptableActions = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
    '+',
    '-',
    '/',
    '*',
    '(',
    ')',
    '=',
    'AC',
    'DEL',
  ];

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

  inputHistoryList.append(div);
};
let onInputHistoryButtonClick = function () {
  if (inputHistory.classList.contains('open')) {
    inputHistory.classList.remove('open');
  } else {
    inputHistory.classList.add('open');
  }
};

let onInputHistoryListClick = function (event) {
  let target = event.target;
  let items = target.innerHTML.split('=');
  let equation = items[0];
  let value = items[1];

  inputEquation.innerHTML = equation;
  input.value = value;

  inputHistory.classList.remove('open');
};

inputHistoryButton.addEventListener('click', onInputHistoryButtonClick);
inputHistoryList.addEventListener('click', onInputHistoryListClick);
