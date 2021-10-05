// What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//  The objects are point to the same pointer, and the pointers then poin to the same value in memory. When that is mutated they are both pointing to the same value with the new mutated array. [1, 4, 3]

// Creating a copy of an array does not create another array but creates a copy of the reference to that array. Since they are just references, they are both referencing the same array. 