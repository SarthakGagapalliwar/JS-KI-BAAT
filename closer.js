What is a Closure in JavaScript?

A closure is created when a function remembers its lexical scope (the variables available in the environment where it was created) even after the outer function has finished executing.

In simple terms:
👉 A closure allows a function to access variables from its parent scope, even after that parent function has returned.

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



