const card=["shoes","pants","kurta"];
// console.log(promise);
//promis chanining  //for better example the code ios return by me only or chacinghg
createOrder(card) //orderId
.then(function(orderId){
    console.log(orderId);  
    return orderId;
})
.catch(function(err){
    console.log(err.message);
    
}) //this is only if the error in card
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
    return paymentInfo;
})
.then(function(paymentInfo){
    return showorderSummary(paymentInfo);
})
.then(function(summary){
    console.log(summary);
})
.catch(function(err){
    console.log(err.message);
    
})// in this whwn ever errr in one of the so for all the top of the chain
.then(function(orderId){
    console.log("No matter what happenes ,I will definiety be called");
    
})

//producer part

function createOrder(card){
    const pr = new Promise(function(resolve, reject){
        //crate an order
        //valdatcard;
        //orderId
        if(!valdatcard(card)){
            const err=new Error("card is not Valid");
            reject(err);
        }
        const orderId ="12345";
        if(orderId){
            setTimeout(function(){
                resolve(orderId)
            },5000);
            // resolve(orderId);
        }
    });
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("payment successful");
    })
}

function showorderSummary(paymentInfo){
    return new Promise(function(resolve,reject){
        resolve("order summary");
    })
}
function valdatcard(card){
    //validate card
    return true;
}




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
