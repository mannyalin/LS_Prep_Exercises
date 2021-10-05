function isArrayEmpty(arr) {
    if (arr) {
      console.log('Not Empty');
    } else {
      console.log('Empty');
    }
  }
  
  isArrayEmpty([]);

//   Outputs:

// [] empty array is not one of the falsey values. Therefore it will be truthy and will return Not Empty