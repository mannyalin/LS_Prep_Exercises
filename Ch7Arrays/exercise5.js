function findIntegers(arr) {
    return arr.filter(function(element) {
        return Number.isInteger(element)
    })
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

findIntegers(things)