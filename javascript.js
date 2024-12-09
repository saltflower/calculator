console.log("test")

let a, b, operator;

let display = document.querySelector(".display")

let numbers = document.querySelector(".numbers")
let currentN = "0"
displayText(currentN)

numbers.addEventListener("click", (e) => {
    target = e.target
    if (target.textContent === "." && currentN.includes(".")) console.log("Skip")
    else if (Array.from(target.classList).includes("number")) {
        if (target.textContent === "." && a === undefined) {
            a = 0
            currentN = 0
        }
        console.log(target.textContent)
        if (currentN != undefined) currentN = currentN + target.textContent;
        else currentN = target.textContent
        if (target.textContent === ".") displayText(currentN)
        else displayText(currentN)
        a = currentN
    }
    console.log(`a: ${a} b: ${b} operator: ${operator}`)
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
let savedOperator = ""

operators.addEventListener("click", (e) => {

    target = e.target.textContent
    operator = target
    if (target != "=") {
        if (a != undefined && b != undefined) {
            result = operate(b, a, operator)
            if (result != 'error') {
                a = undefined
                b = result
                currentN = ""
                displayText(b)
            }
            else {
                display.textContent = "ERROR"
            }
        }
        else if (b === undefined) {
            b = a
            a = undefined
            savedOperator = target
            currentN = a
        }
        else if (a === undefined) {
            savedOperator = target
            currentN = undefined
        }
    }
    if (target === "=") {
        if (a != undefined && b != undefined) {
            result = operate(b, a, savedOperator)
            if (result != 'error') {
                a = undefined
                b = result
                currentN = ""
                displayText(b)
            }
            else {
                display.textContent = "ERROR"
            }
        }
        else if (a === undefined && b != undefined) {
            displayText(b)
        }
        else if (b === undefined) {
            displayText(a)
        }
    }
    console.log(savedOperator)
    console.log(`a: ${a} b: ${b} operator: ${operator}`)
    });

function add(localA, localB) {
    return +localA + +localB
}

function subtract(localA, localB) {
    return +localA - +localB
}

function multiply(localA, localB) {
    return +localA * +localB
}

function divide(localA, localB) {
    if (parseFloat(localB) === 0) {
        a = undefined
        b = undefined
        operator = undefined
        currentN = ""
        return "error";
    }
    else return +localA / +localB
}

function operate(localA, localB, operation) {
    switch(operation) {
        case "+": return add(localA, localB);
        case "-": return subtract(localA, localB);
        case "*": return multiply(localA, localB);
        case "/": return divide(localA, localB);
    }
    return 0
}



function displayText(n) {
    let dot = false
    console.log(n)
    dot = (String(n).charAt(String(n).length - 1) === ".")
    n = Math.round(n*10000)/10000
    console.log(`displayText: ${n} dot: ${dot}`)
    display.textContent = parseFloat(n)
    if (dot) display.textContent += "."
    if (display.textContent === "NaN") display.textContent = "0"
}


