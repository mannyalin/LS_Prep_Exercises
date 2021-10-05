function oddLengths(arr) {
    let arrLength = arr.map(function(entry){
        return entry.length;
    })
    let oddArr = arrLength.filter(function(e){
        return e % 2 === 1;
    })
    return oddArr;
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));