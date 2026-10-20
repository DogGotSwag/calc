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
    input.value = `${operandOne||""} ${operator||""} ${operandTwo||""}`;
}

let operandOne;
let operandTwo;
let operator;

let buttonSection = document.querySelector(".buttonsSection");

buttonSection.addEventListener("click", (e) => {
    let target = e.target;
    if(target.classList.contains("digit")){
        let num = +target.textContent;
        if(!operandOne) operandOne = num;
        else if(!operator) operandOne = +`${operandOne}${num}`;
        else if(!operandTwo) operandTwo = num;
        else operandTwo = +`${operandTwo}${num}`;
    }
    if(target.classList.contains("operator")){
        let op = target.textContent;
        operator = op;
    }
    updateDisplay();
});


