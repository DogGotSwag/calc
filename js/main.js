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

let operandOne;
let operandTwo;
let operator;

let buttonSection = document.querySelector(".buttonsSection");

buttonSection.addEventListener("click", (e) => {
    let target = e.target;
    if(target.classList.contains("digit")){
        let num = +target.textContent;
        console.log(num);
    }
    if(target.classList.contains("operator")){
        let op = target.textContent;
        console.log(op);
    }
});


