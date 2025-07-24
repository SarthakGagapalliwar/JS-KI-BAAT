API_URI= "https://api.github.com/users/SarthakGagapalliwar"



//The fetch() function in JavaScript is used to make HTTP requests—typically to retrieve data from APIs. It is part of the modern browser's Fetch API, and returns a Promise that resolves to a Response object.

/*
🧠 Behind the Scenes:
fetch() uses Promises

It’s non-blocking.

The response can be .json(), .text(), .blob(), etc.

By default, fetch() only rejects on network failure

HTTP 404, 500, etc. do not cause the fetch to reject, so you must manually check response.ok.

*/
async function handlePromise(){
    //feact also give a promise

    //fetch()=>response.json() this agin a promise=>gives reult after resolve
   const data=await fetch(API_URI) //feact return a responce
//    data.json().then  to handle prmise again we will use await

    const jsonval=await data.json();

    console.log(jsonval);
    
}
handlePromise();


/*
handlepromse it call 
then look await till the responce reslove then handlepromes suspend till reolve
then handlepromse reumnse then to next line 
look gain awit then with for the resolv it repoce till handlepromse is suspend 
then print in next line
*/


//handling error in this async await

async function handlePromise2(){
    try{
        const data=await fetch(API_URI)
         const jsonval=await data.json();
         console.log(jsonval, "seond with try catch");
    }
    catch(err){
        console.log(err);
    }

    
}
handlePromise2();
//we can do lik this also for handling error also
handlePromise2().catch((err)=>console.log(err));



/*
intervier quatiom
1) what is asyn awit?=>asyn is keyword with function and asyn function is diffrent
awit is use inside the asyn function only to handle promisees and this promies is ayncronis
*/