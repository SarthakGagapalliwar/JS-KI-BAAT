console.log("start");
setTimeout(function cb(){
    console.log("cb");
})

//whe you run the code first gec (Global Execution Context.) is creeted in call tack
// It is the default execution context created when your JavaScript program starts running.

// How GEC works:
// When JavaScript code runs, it goes through two main phases:

// Creation Phase:

// JavaScript sets up the global object (window in browsers, global in Node.js)

// Creates the (this) binding (this refers to the global object in GEC)

// Memory is allocated for functions and variables (hoisting happens here)

// Execution Phase:

// Code is executed line by line

// Functions are placed on the call stack and executed

//whem setTimeout call it first goes the   (*Callback Queue*) when the time expres then the event loop chek if we have soemting in callBackQueue then it goes to (*CallStack*) quickly execute the (cb)  the the goes to console





console.log("start");
document.getElementById('btn')
.addEventListener("click",function cb(){
    console.log("callback");
    
})
console.log("end");

// the first GEC craeded in callstack then it goers to concle then webapi method then log it print(start)

//in second line documnet.  call DomApi it expess the html code  .addEvnt register the cb() with aatact the vent Click in the webApi

//then print the end same as start hten gec also gone when code done

//but event handler will stacy there in webAbi

//if someone clcik it firrt goes to callbackQueue event looop chekce at the callbackQueseu any thing is there  then it goes to callStack then it printf




//for the feach fucntion in this  should be diffrent 


console.log("start");
setTimeout(function cbT(){
    console.log("cb setTimeout");
    
},5000)
fetch("hhtps:/api.netflix.com")
.then(function cbF(){
    console.log("Cb netflix");
    
})

console.log("end");


// inthis code first it will printr first in console
// then it will go to webapi to fetch the data
// then it will go to webapi to setTimeout
//for the feact as it gose to webapi then cbF(fetch fuchtion) it will go (Micritask Queue) whiotch as higher priortyt 

//at same time the 5 second as done for the cbt as done it time to call acbka fucntion

// as the first it goes to the last line will peinr the first (end)  then (GEC) also pop from the stack

//the cbf will come to the stack beause it has hight proierty then goes to callback queue for cbt 


// finaloutput
/*
Start
End
Cb Netflix
Cb setTimeout
*/ 


// in the microtask queue in this we wll put only promises and mutaionObjerver

/*
What is Starvation in the Microtask Queue?
In JavaScript, starvation happens when microtasks (like Promise.then, queueMicrotask) keep running and prevent macrotasks (like setTimeout, setInterval, UI rendering, user input handling) from executing.

function run() {
  Promise.resolve().then(run); // recursively schedules itself
}

run();

setTimeout(() => {
  console.log("Timeout fired");
}, 0);

Starvation Time Limit?
No strict time (not in minutes).

As long as microtasks keep queuing themselves, the browser never proceeds.

So technically, starvation could last forever unless stopped manually.


 How to Avoid It?
Don't recursively queue microtasks without breaks.

Use setTimeout or setImmediate to yield control:

function safeRun() {
  Promise.resolve().then(() => {
    // do some work
    setTimeout(safeRun, 0); // yield to event loop
  });
}

safeRun();

📌 Summary:
Microtask starvation happens when microtasks endlessly prevent macrotasks.

It can cause UI freezes, timers not firing, and poor UX.

Always let the event loop breathe.

Let me know if you want a visual or browser demo of this!

*/