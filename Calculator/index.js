const display = document.getElementById("display");

let currentExpression = "";

function updateDisplay() {
    display.textContent = currentExpression;
}

function one() {
    currentExpression += '1';
    updateDisplay();
}

function two() {
    currentExpression += '2';
    updateDisplay();
}

function three() {
    currentExpression += '3';
    updateDisplay();
}

function four() {
    currentExpression += '4';
    updateDisplay();
}

function five() {
    currentExpression += '5';
    updateDisplay()
}

function six() {
    currentExpression += '6';
    updateDisplay();
}

function seven() {
    currentExpression += '7';
    updateDisplay();
}

function eight() {
    currentExpression += '8';
    updateDisplay();
}

function nine() {
    currentExpression += '9';
    updateDisplay();
}

function zero() {
    currentExpression += '0';
    updateDisplay();
}

function add() {
    currentExpression += "+";
    updateDisplay();
}

function subtract() {
    currentExpression += "-";
    updateDisplay();
}

function multiply() {
    currentExpression += "*";
    updateDisplay();
}

function divide() {
    currentExpression += "/";
    updateDisplay();
}

function enter() {
    try {
        const result = eval(currentExpression);
        display.textContent = result;
        currentExpression = result.toString();
    } catch (error) {
        display.textContent = "Error"
    }
}

function clearDisplay() {
    currentExpression = "0";
    updateDisplay();
}


