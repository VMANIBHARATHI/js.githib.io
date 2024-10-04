function outerFunction() {
    let outerVariable = "I am outside!";
  
    function innerFunction() {
      console.log(outerVariable); // Accessing outer function's variable
    }
  
    return innerFunction;
  }
  
  const closureFunction = outerFunction(); 
  closureFunction();
