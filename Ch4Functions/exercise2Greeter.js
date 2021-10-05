let rlSync = require('readline-sync')

function getNames(prompt) {
    let name = rlSync.question(prompt)
    return name
}

let firstName = getNames('What is your first name?')
let lastName = getNames('What is your last Name?')
console.log(`Hello, ${firstName} ${lastName}`)