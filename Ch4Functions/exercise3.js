function getNumbers(prompt) {
    let rlSync = require('readline-sync');
    return Number(rlSync.question(prompt))
}

let firstNumber = getNumbers('Enter the First Nunber:\n')
let secondNumber = getNumbers('Enter the second number:\n')

function Multiply(a, b) {
    console.log(`${a} * ${b} = ${a * b}`);
}



Multiply(firstNumber, secondNumber);