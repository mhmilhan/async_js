// First Test

function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    if(callback) callback(sum);
    return sum;
  }

calculator(5, 5, function(result) {
    console.log(result);
});

// Second Test

/* function display(some) {
    console.log(some);
  }
  
  function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    if(callback) callback(sum);
    return sum;
  }
  
const result = calculator(5, 5);
console.log(result); */

// Third Test

/* function display(some) {
    console.log(some);
  }
  
  function calculator(num1, num2, callback) {
    let sum = num1 + num2;
    if(callback) callback(sum);
    return sum;
  }
  
const result = calculator(5, 5, display);
console.log(result); */