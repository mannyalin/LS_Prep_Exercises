// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.


 // => [1, 5, 3]

function oddLengths(array) {
    return array.reduce((accumulator, currentValue) => {
        let length = currentValue.length
        if(length % 2 === 1) {
            accumulator.push(length)
        }
        return accumulator
    }, [])
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));