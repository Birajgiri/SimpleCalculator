// Calculator state variables
let currentValue = 0;
let previousValue = 0;
let operator = null;
let waitingForOperand = false;
let justCalculated = false;

// Display limits
const MAX_DIGITS = 8;
const MAX_VALUE = 99999999; // 8 digits
const MIN_VALUE = -9999999; // "-" + 7 digits

// Get display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay(value) {
    const displayElement = document.getElementById('display');
    
    // Remove any previous error/overflow classes
    displayElement.classList.remove('error', 'overflow');
    
    if (value === 'ERROR') {
        displayElement.textContent = 'ERROR';
        displayElement.classList.add('error');
    } else if (value === 'OVERFLOW') {
        displayElement.textContent = 'OVERFLOW';
        displayElement.classList.add('overflow');
    } else {
        // Format the number for display
        let displayValue = value.toString();
        
        // Check if the number is too large to display
        if (value > MAX_VALUE || value < MIN_VALUE) {
            displayElement.textContent = 'OVERFLOW';
            displayElement.classList.add('overflow');
            return;
        }
        
        // Ensure we don't exceed display limits
        if (displayValue.length > MAX_DIGITS) {
            displayElement.textContent = 'OVERFLOW';
            displayElement.classList.add('overflow');
            return;
        }
        
        displayElement.textContent = displayValue;
    }
}

// Function to handle digit entry
function enterDigit(digit) {
    if (display.textContent === 'ERROR' || display.textContent === 'OVERFLOW') {
        reset();
    }
    
    if (waitingForOperand || justCalculated) {
        currentValue = digit;
        waitingForOperand = false;
        justCalculated = false;
    } else {
        // Check if adding this digit would exceed display limits
        let newValue = currentValue * 10 + digit;
        
        // Check for overflow
        if (newValue > MAX_VALUE || newValue.toString().length > MAX_DIGITS) {
            updateDisplay('OVERFLOW');
            return;
        }
        
        currentValue = newValue;
    }
    
    updateDisplay(currentValue);
}

// Function to handle operator entry
function enterOperator(nextOperator) {
    if (display.textContent === 'ERROR' || display.textContent === 'OVERFLOW') {
        return;
    }
    
    if (previousValue === 0) {
        previousValue = currentValue;
    } else if (operator && !waitingForOperand) {
        // Perform the pending calculation
        const result = performCalculation();
        if (result === null) return; // Error occurred
        
        currentValue = result;
        previousValue = result;
        updateDisplay(currentValue);
    }
    
    waitingForOperand = true;
    operator = nextOperator;
    justCalculated = false;
}

// Function to perform calculation
function performCalculation() {
    let result;
    
    switch (operator) {
        case '+':
            result = previousValue + currentValue;
            break;
        case '-':
            result = previousValue - currentValue;
            break;
        default:
            return currentValue;
    }
    
    // Check for overflow
    if (result > MAX_VALUE || result < MIN_VALUE) {
        updateDisplay('OVERFLOW');
        currentValue = 0;
        previousValue = 0;
        operator = null;
        waitingForOperand = false;
        return null;
    }
    
    return result;
}

// Function to handle calculate button
function calculate() {
    if (display.textContent === 'ERROR' || display.textContent === 'OVERFLOW') {
        return;
    }
    
    if (operator && previousValue !== 0 && !waitingForOperand) {
        const result = performCalculation();
        if (result === null) return; // Error occurred
        
        currentValue = result;
        previousValue = 0;
        operator = null;
        waitingForOperand = false;
        justCalculated = true;
        
        updateDisplay(currentValue);
    }
}

// Function to reset calculator
function reset() {
    currentValue = 0;
    previousValue = 0;
    operator = null;
    waitingForOperand = false;
    justCalculated = false;
    updateDisplay(currentValue);
}

// Initialize display
updateDisplay(currentValue);