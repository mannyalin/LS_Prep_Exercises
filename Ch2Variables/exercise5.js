let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// bar will be logged to the console because the reassignment of foo value to 'qux' is only available within the block scope.