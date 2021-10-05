function evenOrOdd(num) {
    if(!Number.isInteger(num)) {
        console.log('Error');
        return
    }
    if(num % 2 === 0) {
        console.log('even')
    } else {
        console.log('odd')
    }
}


evenOrOdd('sdf')
evenOrOdd(5)

