function numbers() {
    let number = 31;
  
    if (number < 30) {
      if (number % 2 === 0) {
        console.log("<30 and even");
      } else {
        console.log("<30 and odd");
      }
    } else {
      console.log("number is not <30");
    }
  }
  numbers();