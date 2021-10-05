// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//Takes a string as an argument. Splits the string where there is a space, and places them in an array, reverses the order, then goes through each value and returns the length of each value in a new array. 