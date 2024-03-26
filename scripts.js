function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operand, a, b) {
    if (operand === "add") {
        return add(a, b);
    } else if(operand === "subract") {
        return subtract(a, b);
    } else if(operand === "multiple") {
        return multiply(a, b);
    } else if(operand === "divide") {
        return divide(a, b);
    } else {
        return null;
    }
}


let num1;
let num2;
let operand;
let displayVal = 0;

// Add event listener for the display value
const display = document.querySelector("#display");
