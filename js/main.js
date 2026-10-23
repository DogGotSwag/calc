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
        if(operandOne == null) operandOne = num;
        else if(operator == null && recentResult){
            operandOne = num;
        } 
        else if(!operator) operandOne = +`${operandOne}${num}`;
        else if(operandTwo == null) operandTwo = num;
        else operandTwo = +`${operandTwo}${num}`;
    }
    if(target.classList.contains("operator")){
        recentResult = false;
        decimalUsed = false;
        let op = target.textContent;
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
        operandOne = null
        operandTwo = null;
        operator = null;
    }

    if(target.classList.contains("decimal")){
        if(!decimalUsed){
            console.log(decimalUsed, operandOne, operator, operandTwo);  
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

    updateDisplay();
});


