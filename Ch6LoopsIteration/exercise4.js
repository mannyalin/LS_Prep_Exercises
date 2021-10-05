// Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// The following will not produce an error because all three components are optional. The next component was omitted but it does have a i += 1 incremental value on the console.log. It will log 1 , 2 ,3, 4, 5 