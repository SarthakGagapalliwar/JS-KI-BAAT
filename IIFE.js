//IIFE -IMmmediately Invoked Function Expression

// is a js function that runs a soon as it is defined.


(function add(a,b){
    console.log(a+b);
})(2,3);


(function say(){
    console.log("Hey");
    
})();

(()=>console.log("I an Es6"))();


const value=(()=>100)();
console.log(value);


// Use cases 1) => Avoid polluting the global namespace

(function add(a,b){
    let age=20; // this age will discarded afterthis fucntio runs ones
    console.log(age);
    
})()

//  2)=> Execute an async function

/*
//wihtout iifc
let data;
async function getdata(){
    data= await fetch();
}
getdata() // this is not good think first you are assing the dta as undefine then adding the data to it


// IIFC
const data1 = (async ()=> await fetch()); // this is much cleaner

*/

// 3) => The Module Pattern
// we would also user iife to create private and public varible and methods

const atm=function(initalBalance){
    let balance=initalBalance; //we have make the balance as private
    function withdraw(amount){
        if(amount>balance){
            return "are you kidding?";
        }else{
            balance -= amount;
            return balance;
        }
    }

    return {withdraw};
};

const piyush=atm(1000);
console.log(piyush.withdraw(100));
