//promise are use for asyn opration in js

//code wihtout promiss by call back;

createorder(card);//orderid
proceedToPyment(orderId);

// theyboth aare depent on each other when order is plased then go to payement option so fill us4e like callback we will wrap in it;


createorder(card,function(orderId){
proceedToPyment(orderId);
});//but in this we have one issue of invertion control that we dont that how much time it will take to complite the oreder then go the payment page(like have given the payemnt api control to another api)


// with Promise

//what is promis? =>  like promise is a plaseHolder for certain period of time after  which will fill with the value of asyn oprations
// or  a conatiner for future value
//or Promise ia an object represnting the eventual comletion or failure of an asynchronus operation

const promise=createOrder(card);//provied empty object wiht some data
//{data:undefine} ather time or run this line runs => {data: OrderDetails} aftehr tahat we will attack the callback fucntion to this prmois object

promise.then(function(orderId){
    proceedToPayment(orderId);
})


//in earlyer we will passing the fucntion to another functtion but with promis we attacing the function to it in this we have control with us;
//in this promises when ever data comes it will automaticly call to addtct function like payment in this

//as soon data in promis it will defentitly call the call the function and till will calles ones only ones



const GITHUB_API="https://api.github.com/user/SarthakGagapalliwar";

const user=fetch(GITHUB_API) //this fetch fucntion return as a promis //this is asyn opration so taker some time;

console.log(user); //so it will print that ti si pending when you expant in consle it will so fulfilled 

//ok why it pending stae first beause of js execte code very fastliy and it is asyn opteion so it willl take some time to get data but it is consle already so it will get pending first after some time if you exted the prmosin in come conlse it will get fullfill

// so if we print the data if data come in it;

user.then(function(data){
    console.log(data);
})

//prmois have only three stage pending ,fullfill, Reject;



//callbcak helll(Pyramid of doom) solve by promises

const card=["shoes", "pants", "kurtas"];

createOrder(card,function(orderId){
    proceedToPayment(orderId,function(paymentInfo){
        showorderSummay(paymentInfo, function(){
            updateWllaetBancle();
        })
    });
})

//by prmomis;

createorder(card)
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showorderSummay(paymentInfo);
})
.then(function(paymentInfo){
    return updateWllaetBancle(paymentInfo);
})
//We are chaining the Promises using .then(), so to avoid bugs(or losing the data), make sure each .then() returns the next function call