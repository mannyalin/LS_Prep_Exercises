let number = 4936
let onesPlace = (number % 10)
number = (number - onesPlace)/10

let tensPlace = (number % 10)
number = (number - tensPlace)/10

let hundredsPlace = (number % 10)
number = (number - hundredsPlace)/10

let thousPlace = (number % 10)

console.log(onesPlace, tensPlace, hundredsPlace, thousPlace)