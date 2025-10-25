// function add(a,b,c){
//     return a+b+c;
// }

// console.log(add(5,8,9));

// let i am needing infrom all from all differnt user or api so we will use curry of coluser


function add(a){
    return function(b){
        return function (c){
            return a+b+c;
        };
    };
};
 
 console.log(add(2)(3)(5)); // it run only when all argugment are geting passed 
 console.log(add(2)(3)); // you will get the function return a+b+c; [Function (anonymous)]


//  function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`sending Email to ${to}  subject ${subject} body ${body}`);
            
//         }
//     }
//  }

const sendAutoEmail=(to)=>(subject)=>(body)=>console.log(`sending Email to ${to}  subject ${subject} body ${body}`);
  
let setp1 = sendAutoEmail("piyushgard.gamil.com");
let step2=setp1("new Order Confiration");

step2("hey boy ,here is smoting for you");