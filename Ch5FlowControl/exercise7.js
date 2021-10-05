function toUpperCaseBigWords(word) {
    if (word.length > 10) {
        return word.toUpperCase()
    } else {
        return word
    }
}

console.log(toUpperCaseBigWords("Sue Smith"));     // => Sue Smith
console.log(toUpperCaseBigWords("Sue Robertson")); // => SUE ROBERTSON
console.log(toUpperCaseBigWords("Joe Thomas"));    // => Joe Thomas
console.log(toUpperCaseBigWords("Joe Stevens"));