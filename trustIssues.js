console.log("start");

setTimeout(function cb(){
    console.log("timeout");
},5000);
console.log("end");
//millionof code afer end


//print
/*
first gec created frist print satrt then last then it will eb busy to excutute the millions of line like ex it will take 10s to run whl code
//in this the settimeout 5 second done and it it wating for in callback quque call statk is cheking callstack is emty or not;
//but in this case it will print aftert 10s only
//this is called concarency  modal

start
end
settimeout 10s after

//as as developer we should not block the main thred so cal the callback method get the chance to ger excutute 

*/



console.log("start");

setTimeout(function cb(){
    console.log("timeout");
},5000);
console.log("end");

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate+10000){
    endDate=new Date().getTime();
}
console.log("while expires")