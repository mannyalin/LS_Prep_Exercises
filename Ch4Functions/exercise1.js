let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// What does this code log to the console? Does executing the foo function affect the output? Why or why not?
// The code will log 1 to the console. The execution of foo does not affect the ouput because it is in the scope of the function. The let statement to declare a variable creates a new variable in the scope. If the let declaration is omitted and only bar = 2 was declared, then the console would log 2. It would bring it to the same scope as line 1 variable scope.