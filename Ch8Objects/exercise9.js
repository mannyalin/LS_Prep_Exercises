// What does the following program log to the console? Why?


let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// object is mutable while string is not. It is reassigned for qux but inside the scope of the function. So the global qux is still hello While the foo.a is mutated to hi. 