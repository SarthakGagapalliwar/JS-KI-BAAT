
// function friendId(){
//     document.getElementById('ff').innerHTML="Friend"
// }
// function friendIdremove(){
//     document.getElementById('ff').innerHTML="Starnger"
// }

// var isStatus =document.querySelector("h5");
// var addFriend=document.querySelector("#Addbtn")
// // var removeFriend=document.querySelector("#removeBtn")
// var check=0;

// addFriend.addEventListener("click", function() {
//     if (check == 0) {
//         isStatus.style.color = "blue";
//         isStatus.innerHTML = "Friend";
//         addFriend.innerHTML = "Remove Friend";
//         addFriend.style.backgroundColor = "lightblue"; 
//         check = 1;
//     } else {
//         isStatus.style.color = "red";
//         isStatus.innerHTML = "Stranger"; // fixed typo
//         addFriend.innerHTML = "Add Friend";
//         addFriend.style.backgroundColor = "lightcoral"; 
//         check = 0;
//     }
// });



// project2

// var con=document.querySelector("#container");
// var love=document.querySelector("i");

// con.addEventListener("dblclick", function(){
//         love.style.transform='translate(-50%,-50%) scale(2)'
//         love.style.opacity="0.8";
//         setTimeout(function(){
//             love.style.opacity="0"

//         },350)
//         setTimeout(function(){
//             love.style.transform='translate(-50%,-50%) scale(0)'

//         },400)
// })



// var main=document.querySelector("#main");
// var cuse=document.querySelector(".cursor");

// main.addEventListener("mousemove",function(dets){
//         cuse.style.left=dets.x+"px"
//         // cuse.style.left=dets.y+"px"
//         cuse.style.top=dets.y+"px"
// })


// function getDuplicates(arr){
//         const count={};
//         const dublicates=[];

//         for(let num of arr){
//                 count[num]=(count[num] || 0)+1;
//         }

//         for(let num in count){
//                 if(count[num]>1){
//                       dublicates.push(Number(num));  
//                 }
//         }
//         return dublicates;
// }
// const arr=[1,2,3,4,4,2,3];
// console.log(getDuplicates(arr));

// function getDuplicates(arr){
//         let seen=new Set();
//         let dub=new Set();

//         for(let num of arr){
//                 if(seen.has(num)){
//                         dub.add(num);
//                 }else{
//                         seen.add(num);
//                 }
//         }
//         return [...dub];
// }
// const arr=[1,2,3,4,4,2,3];
// console.log(getDuplicates(arr));


// let  str = "this is sharhrukh khan";

// let newStr=str.split(' ').map(item => item[0].toUpperCase()+item.slice(1,item.length)).join('\n');

// console.log(newStr);


// function x(y){
//     console.log("x");
//     y();
// }
// x(function y(){  //this y is a callback function 
//     console.log("y");
    
// })







const box = ["shoes"];
const promise = createBox(box);

promise
  .then(function (orderId) {
    console.log("Order created with id:", orderId);
    return processToPay(orderId);
  })
  .then(function (paymentInfo) {
    console.log("Payment status:", paymentInfo);
    return orderDone(paymentInfo);
  })
  .then(function (orderStatus) {
    console.log("Order status:", orderStatus);
    return summary(orderStatus);
  })
  .then(function (summaryInfo) {
    console.log("Summary:", summaryInfo);
  })
  .catch(function (err) {
    console.error("Error:", err.message);
  });

// ✅ Functions

function createBox(card) {
  return new Promise(function (res, rej) {
    if (!validBox(card)) {
      const err = new Error("Box is not correct");
      rej(err);
    }
    // valid box;
    const boxId = 123456;
    res(boxId);
  });
}

function processToPay(orderId) {
  return new Promise(function (res, rej) {
    // simulate payment success
    res("Payment successful for order " + orderId);
  });
}

function orderDone(paymentInfo) {
  return new Promise(function (res, rej) {
    res("Order confirmed → " + paymentInfo);
  });
}

function summary(orderStatus) {
  return new Promise(function (res, rej) {
    res("Summary generated: " + orderStatus);
  });
}

function validBox(card) {
  return true;
}
