console.log("test")

let a, operator, b;

let display = document.querySelector(".display")

let numbers = document.querySelector(".numbers")
let currentN = "";

numbers.addEventListener("click", (e) => {
    target = e.target
    if (target.textContent === "." && currentN.includes(".")) console.log("Skip")
    else if (Array.from(target.classList).includes("number")) {
        console.log(target.textContent)
        currentN = currentN + target.textContent;
        displayText(currentN)
        a = currentN
    }
});

let clear = document.querySelector("#clear")

clear.addEventListener("click", (e) => {
    target = e.target
    console.log(target.textContent)
    currentN = ""
    a = undefined
    b = undefined
    displayText(currentN)
});

let sign = document.querySelector("#sign")

sign.addEventListener("click", (e) => {
    target = e.target
    console.log(target.textContent)
    if (currentN.includes("-")) {
        currentN = currentN.slice(1)
    }
    else currentN = "-" + currentN
    displayText(currentN)
});

let percent = document.querySelector("#percent")
let testing = document.querySelector(".testing")

percent.addEventListener("click", (e) => {
    target = e.target
    console.log(target.textContent)
    currentN = currentN / 100
    displayText(currentN)
});

let operators = document.querySelector(".operators")
let savedN = undefined;

operators.addEventListener("click", (e) => {
    });

function add(a, b) {
    return +a + +b
}

function subtract(a, b) {
    return +a - +b
}

function multiply(a, b) {
    return +a * +b
}

function divide(a, b) {
    return +a / +b
}

function operate(a, b, operation) {
    switch(operation) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
    }
    return 0
}

function displayText(n) {
    display.textContent = n
}


