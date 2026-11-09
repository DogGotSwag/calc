function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, numOne, numTwo){
    switch (operator) {
        case "+":
            return add(numOne, numTwo); 
        case "-":
            return subtract(numOne, numTwo); 
        case "*":
            return multiply(numOne, numTwo); 
        case "/":
            return divide(numOne, numTwo); 
        default:
            break;
    }
}

function updateDisplay(){
    let input = document.querySelector("input");
    input.value = `${operandOne == null ? "":operandOne} ${operator||""} ${operandTwo == null ? "":operandTwo}`;
}

function processDigitInput(num){
    if(operandOne == null) operandOne = num;
    else if(operator == null && recentResult){
        operandOne = num;
    } 
    else if(!operator) operandOne = +`${operandOne}${num}`;
    else if(operandTwo == null) operandTwo = num;
    else operandTwo = +`${operandTwo}${num}`;
}

function processOperatorInput(op){
    recentResult = false;
    decimalUsed = false;
    if(operandOne && operator && operandTwo){
        let result =  +operate(operator, operandOne, operandTwo);
        operandOne = +result.toFixed(2);
        operator = op;
        operandTwo = null;
    }
    else{
        operator = op;
    }
}

function processDeleteInput(){
    if(operandOne && operator == null){
        let newOpArr = String(operandOne).split("");
        let removed = newOpArr.splice(-1, 1)[0];
        if(removed === ".") decimalUsed = false;
        let newNum = newOpArr.join("");
        operandOne = (newNum == "") ? null : newNum; 
    }
    else if(operator && operandTwo == null){
        operator = null;
    }
    else if(operandTwo){
        let newOpArr = String(operandTwo).split("");
        let removed = newOpArr.splice(-1, 1)[0];
        if(removed === ".") decimalUsed = false;
        let newNum = newOpArr.join("");
        operandTwo = (newNum == "") ? null : newNum; 
    }
}

function processClearInput(){
    operandOne = null
    operandTwo = null;
    operator = null;
}

let operandOne;
let operandTwo;
let operator;
let recentResult = false;
let decimalUsed = false;

let buttonSection = document.querySelector(".buttonsSection");

buttonSection.addEventListener("click", (e) => {
    let target = e.target;
    if(target.classList.contains("digit")){        
        let num = +target.textContent;
        processDigitInput(num);
    }
    if(target.classList.contains("operator")){
        let op = target.textContent;
        processOperatorInput(op);
    }
    if(target.classList.contains("equal")){
        if(operandOne != null && operator != null && operandTwo != null){
            let result = +operate(operator, operandOne, operandTwo);
            operandOne = +result.toFixed(2);
            operandTwo = null;
            operator = null;
            recentResult = true;
        }
    }
    if(target.classList.contains("clear")){
        processClearInput();
    }

    if(target.classList.contains("decimal")){
        if(!decimalUsed){
            if(operandOne == null) operandOne = ".";
            else if(operator == null && recentResult){
                operandOne = ".";
            } 
            else if(!operator) operandOne = `${operandOne}${"."}`;
            else if(operandTwo == null) operandTwo = ".";
            else operandTwo = `${operandTwo}${"."}`;
            decimalUsed = true;
        }
    }

    if(target.classList.contains("delete")){
        processDeleteInput();
    }

    updateDisplay();
});

document.addEventListener("keydown",(e) => {
    let key = e.key;
    let operators = ["+","-","*","/"];
    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    switch (true) {
        case (operators.includes(key)):
            processOperatorInput(key)
            break;
        case (numbers.includes(key)):
            processDigitInput(key);
            break;
        case (key === "Backspace"):
            processDeleteInput();
            break;
        case (key === "c"):
            processClearInput();
            break;
        case (key === "."):
            console.log("dec");
            break;
        case (key === "="):
            console.log("=");
            break;
        default:
            break;
    }
    updateDisplay();
});

const inputElement = document.querySelector('input');
inputElement.addEventListener('keydown', function(event) {
    event.preventDefault();
});





