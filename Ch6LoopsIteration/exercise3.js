let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// The code above causes an infinite loop because counter = 1 always assigns the value to 1 which will be truthy and so the conditional on line 7 is never reached to break the code.