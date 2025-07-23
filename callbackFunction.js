//what is a callback Function in javaScript

// A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the main function completes its task. It's commonly used for asynchronous operations like API calls, timers, or event handling. For example, in setTimeout(() => { console.log("Hello"); }, 1000);, the arrow function is a callback that runs after 1 second.

setTimeout(() => {
    console.log("timer");
    
}, 5000); //aFTER 
// In this example, the callback function is the arrow function that logs "timer" to the consol
function x(y){
    console.log("x");
    y();
}
x(function y(){  //this y is a callback function 
    console.log("y");
    
})


function attachEventListener(){

    let count=0;  //to add let ibn gogble scope is not good
    document.querySelector('#clickMe').addEventListener("click",()=>{  //in this arrow function as callback function // this function will go to calltack as asynchronous function
        console.log("button click",++count);
        
    
    })

}
attachEventListener()


//we need to remove eventListenert when we not useing it beause it is heavey 
//in upper example remove the event listiner th ewe will get garbage collection also like count int uperre code

//callbacke is super power full for handling aync proginmg in js
//issue with callbak is 1) callback hell like nested callback 2)insersion of control=>this we pass callback to aother function to another funtion givin the conteol to onther function  and we dont no it will excute or not