// An async function lets you write asynchronous (non-blocking) code that looks and behaves like synchronous code.
//async fucntion always return a promise
async function getdata() {
    return "namaste"  //either we return a promis from here or retun a value liike string int more in thie if return a string and int in this it wrap in the promise and return it;
}

const datapromise=getdata();
// console.log(datapromise);
// datapromise.then((res)=>console.log(res));


const P = new Promise((res,rej)=>{
    res("Promise resolved Value");
})

async function asyncPromise() {
    return P;
}

const returnPrmose=asyncPromise();
//console.log(returnPrmose); //INT HIS IT WILL GIVE PENDING THEN IT WILL CHCEK IT WILL BE FULLFILE //in this we js enging dnt need tot wrap in promise so that why in upper js know to trap and alltime only resolve it thys  tehr is no pending state

//datapromise.then((res)=>console.log(res));



//async awaite combo use  to handle promises


//how we handle promise wihtout async and await
const P2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise resolved Value wihoutb asyn await");
    },5000);
})
 function PromiseNoasyn() {
    //Js engine will not wait fomr to be resolve
    // P2.then((res)=>console.log(res));
    // console.log("nasmate js");
    //in this firs namste js fil print then promise resolve will print 
}
PromiseNoasyn();

//with asyn await

const p3=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise resolved Value wiht asyn await");
    },5000);
})
const p4=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("Promise resolved Value wiht asyn await 2");
    },10000);
})

async function handlePromise(){
    console.log("hello word"); //it will print quicky
    
    //Js engine was waiting for promise to resolved not realy wating acts like it is waiting
    const val=await p3;  //await is only use inside an asyn function
    // go to next line when only promise is get resolves as per example  7000ms
    console.log("nasmate js");
    console.log(val);


    const val2=await p3;
    console.log("namste js 2"); //both will
    console.log(val2); //it will print afte 7 second only fomr first awiat


    //by adding second promise
    const val3=await p4;
    console.log("namste js 3");
    console.log(val3); // in this fris it willl check that the upper prmise is reove or not if the upper pomise is not reolve before this prome the  it will wait for the it then print all them at one time
    //for clear it go to line 87

    //if this promise is 5s the  seond ptmse is is 7s in this tyhe first will print then seonnd
    

}
handlePromise();


//empty
//call stack

/*

for p3=5s 
then p4=10s;

firsrt handlepromise() will come to the callstack
then it will go to the first line of the function
then it will print hello word
then it will go to the first promise in this handlePeomise will get out(suspend it) then wait for the promise resolve 
call stack will get empty again 
after p3 reolve like after 7 seccond handlePrmise will come again
then it start where he actuly left like line number 63
then log nasmaste js and log the val


the goes to another awit an chcek it is reolve or not it chcek p4 is relove after 10 sit will again suspend handlePromse it reolved line 74
then again handlepromse come back to call stack start from line 75
then it will print namste js 3 and log the val3


i this first p3 will print then next 5sec p4 will print
*/


/*
for p3=10s 
then p4=5s;

handleprome came
then it will print hello word
then it will go to the first promise in this handlePeomise with till the frist p3 10s promise reolve wait lie 63 to complite
over time 
it will print 
console.log("nasmate js");
    console.log(val);

then it chcek that tht p4 is all reasy resolve it 5 second then it will instancet print
console.log("namste js 3");
console.log(val3);

//all will print after 10 second p3 and p4
*/


//async - p3 p4


//realword example in file asyncawit2


/*
| Reason                                       | Explanation                                                                                                                             |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Handle asynchronous operations easily** | Things like API calls, reading files, or database queries take time — async functions let the program continue running without waiting. |
| **2. Simplify Promise handling**             | Instead of chaining `.then()` and `.catch()`, you can use `await` for cleaner, more readable code.                                      |
| **3. Avoid callback hell**                   | Makes code look synchronous while actually being asynchronous.                                                                          |
| **4. Better error handling**                 | You can use `try...catch` instead of `.catch()` for cleaner control of async errors.                                                    |
*/