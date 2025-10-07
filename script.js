// Simple calculator variables
let display = document.getElementById('display');
let currentNumber = 0;
let previousNumber = 0;
let operation = null;
let newNumber = true;

// Display limits (8 digits or "-" + 7 digits)
const MAX_VALUE = 99999999;
const MIN_VALUE = -9999999;

// Update display
function updateDisplay(value) {
    display.classList.remove('error', 'overflow');
    
    if (value === 'ERROR') {
        display.textContent = 'ERROR';
        display.classList.add('error');
    } else if (value === 'OVERFLOW') {
        display.textContent = 'OVERFLOW';
        display.classList.add('overflow');
    } else {
        if (value > MAX_VALUE || value < MIN_VALUE) {
            display.textContent = 'OVERFLOW';
            display.classList.add('overflow');
        } else {
            display.textContent = value;
        }
    }
}

// Enter a digit
function enterDigit(digit) {
    if (display.textContent === 'ERROR' || display.textContent === 'OVERFLOW') {
        reset();
    }
    
    if (newNumber) {
        currentNumber = digit;
        newNumber = false;
    } else {
        let newValue = currentNumber * 10 + digit;
        if (newValue > MAX_VALUE) {
            updateDisplay('OVERFLOW');
            return;
        }
        currentNumber = newValue;
    }
    
    updateDisplay(currentNumber);
}

// Enter an operator (+ or -)
function enterOperator(op) {
    if (display.textContent === 'ERROR' || display.textContent === 'OVERFLOW') {
        return;
    }
    
    if (operation && !newNumber) {
        calculate();
    }
    
    previousNumber = currentNumber;
    operation = op;
    newNumber = true;
}

// Calculate result
function calculate() {
    if (!operation || newNumber) {
        return;
    }
    
    let result;
    if (operation === '+') {
        result = previousNumber + currentNumber;
    } else if (operation === '-') {
        result = previousNumber - currentNumber;
    }
    
    if (result > MAX_VALUE || result < MIN_VALUE) {
        updateDisplay('OVERFLOW');
        reset();
        return;
    }
    
    currentNumber = result;
    operation = null;
    newNumber = true;
    updateDisplay(currentNumber);
}

// Reset calculator
function reset() {
    currentNumber = 0;
    previousNumber = 0;
    operation = null;
    newNumber = true;
    updateDisplay(0);
}

// Initialize
updateDisplay(0);