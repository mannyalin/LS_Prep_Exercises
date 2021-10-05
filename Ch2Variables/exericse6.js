const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// The program logs bar and will not produce an error. Even though const was used and reused, it is done inside a block scope. 