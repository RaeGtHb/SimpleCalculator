const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answerElement = document.getElementById("answer");
const operatorElement = document.getElementById("operatorDropdown");

function sum(a, b) {
    const answer = a + b;

    answerElement.innerText = "Answer: " + answer;
}

function difference(a, b) {
    const answer = a - b;

    answerElement.innerText = "Answer: " + answer;
}

function product(a, b) {
    const answer = a * b;

    answerElement.innerText = "Answer: " + answer;
}

function quotient(a, b) {
    const answer = a / b;

    answerElement.innerText = "Answer: " + answer;
}

function compute() {
    const parsedNum1 = parseFloat(num1.value);
    const parsedNum2 = parseFloat(num2.value);

    switch (operatorElement.value) {
        case "sum":
            sum(parsedNum1, parsedNum2);
            break;
        case "difference":
            difference(parsedNum1, parsedNum2);
            break;
        case "product":
            product(parsedNum1, parsedNum2);
            break;
        case "quotient":
            quotient(parsedNum1, parsedNum2);
            break;
        default:
            answerElement.innerText = "Please select operator!";
            break;
    }

    // if (operatorElement.value === "sum")
    //     sum(parsedNum1, parsedNum2);
    // else if (operatorElement.value === "difference")
    //     difference(parsedNum1, parsedNum2);
    // else if (operatorElement.value === "product")
    //     product(parsedNum1, parsedNum2);
    // else
    //     quotient(parsedNum1, parsedNum2);
}