function barCodeScanner(serial) {
    switch (serial) {
      case '123':
        console.log('Product1');
      case '113':
        console.log('Product2');
      case '142':
        console.log('Product3');
      default:
        console.log('Product not found!');
    }
  }
  
  barCodeScanner('113');

//   What does the code log to the console?

// break keyword missing, so it will continue to log the rest of the cases: Product2, Product3, Product not found