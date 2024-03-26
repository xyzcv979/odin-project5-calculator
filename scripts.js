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
    if (b === 0) {
        alert("Can't divide by 0!");
        resetAll();
        return null;
    }
    return a / b;
}

function operate(operand, a, b) {
    if (operand === "add") {
        return add(a, b);
    } else if(operand === "subtract") {
        return subtract(a, b);
    } else if(operand === "multiply") {
        return multiply(a, b);
    } else if(operand === "divide") {
        return divide(a, b);
    } else {
        return null;
    }
}


let num1 = null;
let num2 = null;
let currOperand;
let displayVal = "0";

// Display value 
const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".number")
numButtons.forEach((num) => {
    num.addEventListener("click", () => {
        if (displayVal === "0") {
            displayVal = num.value;    
        } else {
            displayVal += num.value;
        }
        display.textContent = displayVal;
    })
});

// Clear button logic
const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    resetAll();
});

// Operand logic
// The current number in displayVal is num1
// After an operand is clicked
// The next number in displayVal is num2
// Apply the operation when equals sign is clicked
const operands = document.querySelectorAll(".operand");
operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        currOperand = operand.value;
        if (num1 === null) {
            num1 = parseInt(displayVal);
        } else { // clicking another operand without clicking "=" btn
            evalAndDisplay();
        }
        displayVal = "0"
    });
});

// Equals button logic
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (num1 === null) {
        return;
    }
    evalAndDisplay();
});

function evalAndDisplay() {
    num2 = parseInt(displayVal);
    result = operate(currOperand, num1, num2);
    if (result !== null) {
        displayVal = result.toString();
        num1 = result;
        num2 = null;
        display.textContent = displayVal;
        displayVal = "0"
    }
}

function resetAll() {
    num1 = null;
    num2 = null;
    currOperand = null;
    displayVal = "0";
    display.textContent = displayVal;
}