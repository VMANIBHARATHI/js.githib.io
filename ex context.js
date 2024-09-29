// Global Execution Context
var name = 'Global';
var outerName = 'Global Outer';

function outerFunction() {
  // Outer Function Execution Context
  var name = 'Outer';
  var outerName = 'Outer Outer';

  function innerFunction() {
    // Inner Function Execution Context
    var name = 'Inner';

    console.log('Name:', name); // 'Inner'
    console.log('Outer Name:', outerName); // 'Outer Outer' from outer function
    console.log('Global Name:', this.name); // 'Global' from global context due to 'this' binding
    console.log('Global Outer Name:', this.outerName); // 'Global Outer' from global context due to 'this' binding
  }

  innerFunction();
}

outerFunction();
