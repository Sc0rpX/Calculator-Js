const buttons = document.querySelector(".btns");
const display = document.querySelector(".display");

let firstNum = "";
let secondNum = "";
let currentOperator = null;
let shouldClearDisplay = false;

// Arithmatic Functions
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0){
        return "ERROR";
    }

    return a / b;
}

// Operate function
function operate(a, b, operator){
    a = +a;
    b = +b;

    switch (operator) {
        case "+": return add(a, b);
        case "-": return substract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }
}

function updateDisplay(value){
    if(shouldClearDisplay){
        clearDisplay();
    }
    if(display.textContent === "0"){
        display.textContent = value;
    }
    else if(display.textContent.length >=14){
        return;
    }
    else{
        display.textContent += value;
    }
}

function clearDisplay(){
    display.textContent = "";
    shouldClearDisplay = false;
}

function clearAll(){
    firstNum = "";
    secondNum = "";
    currentOperator = null;
    shouldClearDisplay = false;
    clearDisplay();
    display.textContent = "0";
}

function updateOperator(operator){
    if(currentOperator !== null){
        compute();
    }
    
    currentOperator = operator;
    firstNum = display.textContent;
    shouldClearDisplay = true;
}

function compute(){
    secondNum = display.textContent;

    display.textContent = operate(firstNum, secondNum, currentOperator);
}

buttons.addEventListener("click", (e) => {
    handleButtonClick(e.target.textContent);
})

function handleButtonClick(value){
    if(!isNaN(value)){
        updateDisplay(value);
    }
    else if(['+', '-', '*', '/'].includes(value)){
        updateOperator(value);
    }
    else if(value === "="){
        compute();
    }
    else if(value === "AC"){
        clearAll();
    }
}
