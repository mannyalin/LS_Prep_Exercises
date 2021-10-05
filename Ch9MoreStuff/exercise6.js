function allMatches(arr, regex) {
    let matches = []
    for(let i = 0; i < arr.length; i += 1) {
        if(arr[i].match(regex)) {
            matches.push(arr[i])
        }
    }
    return matches;
}

let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
  ];

console.log(allMatches(words, /lab/))