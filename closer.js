// What is a Closure in JavaScript?

// A closure is created when a function remembers its lexical scope (the variables available in the environment where it was created) even after the outer function has finished executing.

// In simple terms:
// 👉 A closure allows a function to access variables from its parent scope, even after that parent function has returned.

// Closures work because JavaScript stores variables used by inner functions in the heap, not the stack, so they survive even after the outer function returns. Each call to the outer function creates a new closure with its own private memor




function outer() {
  let count = 0;   // variable in outer scope

  function inner() {
    count++;       // inner function still has access to "count"
    return count;
  }

  return inner;
}

const counter = outer(); 
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
//var useing for settimeout we need to use closer to print 1 2 3 4 5
//in this we will get new memo evrey size or every value
// function x(){
//     for(var i=1; i<=5; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000);
//         }
//         close(i);
//     }
//     console.log("namaste javascrits");
// }
// x();

//let haVE NEW ALL COpay in this so it will print 1 2 3 4 5 
// function x(){
//     for(let i=1; i<=5; i++){
       
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000);
        
//     }
//     console.log("namaste javascrits");
// }
// x();






// A closeer is the combination of a function bundle together(enclosed) wiht refencse to its
// surrouding state (the lexical enviromrnt). in other words, aclosure gives you acess to an other
//function scope from an inner function


function adder(num){
  function add(b){
    console.log(num+b);
  }

  return add;
}

const addTo5=adder(5);
const addTo10=adder(10);

addTo5(2);
addTo5(10);

addTo10(2);
ṇ