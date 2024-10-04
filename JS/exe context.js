var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)

// Execution Context-------------
// Creation phase--------
  GlobalExecuitnContext ={
    LexicalEnvironment:{
        EnvironmentRecord:{
            type:"declaretive"
            n: undefined,
            Square1: undefined,
            square2: undefined

        },
        outer: "null"
        ThisBinding: "window object"
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            type: "declaretive"
           
            Square1: undefined,
            square2: undefined
        },      
        outer: "null"
        thisbinding:"window object"
    }

  }

//   Execution phase--------
GlobalExecuitnContext ={
    LexicalEnvironment:{
        EnvironmentRecord:{
            type:"declaretive"
            n: 5,
            Square1: undefined,
            square2: undefined

          },
         outer: "null"
         ThisBinding: "window object"
    },
    VariableEnvironment:{
        EnvironmentRecord:{
            type: "declaretive"
            n: 5,
            Square1: 25,
            square2: 64
        },
        outer: "null"
        thisbinding:"window object"
    }
} 
