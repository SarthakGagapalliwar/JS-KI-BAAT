//Global Execution Contex

console.log(x);
var x=10


//when you run this code first the gsc is created in gec there are two phases

/* 
first phase => Memory Phase
second phase => Code(threat)Phase

first will it will define all variable of code in memory pahse with undfine

in this code the var x is loaded in the memoy pahse with the value of inital value (var x=Undefine)

in code pahse it will take line by line as per ower code it will take console log and it will asses the the x in memory phase as it will x is define as undiefine
//it will log undefine

after this in second line will go the coed pahse x=10 then x is define in memory pahse x will get the value of 10;


after that gce will delete
*/


console.log("gec creted");
var gv="i am a global function"

function globalFunction(){
    console.log("inside gloabal function");
}
console.log(gv);
globalFunction();
console.log("gce end");

/*
    first in global memo all varvale will lodad like gv=undefine, globalFunction in this wholw function will lodad whole body

    the code comes line by line 

    prints;

    gec created
    i am a global function

    Then globalFunction call then again gec will creted for the funtion 
    memo    code
     |        |
     empty    this code ther will be log 

     after this gce will deledte for the functio one

    gce end




globalFunction();

function globalFunction(){
    console.log("inside gloabal function");
}

fort his also the output will be thrte same beaue in gec the functio will be store in memo full body of the function will store in the memo
so the the output will be the same




globalFunction();

var globalFunction=function (){
    console.log("inside gloabal function");
}

in the the will print first undefine beause in the meon the var globalFunction will defiunr as the undine beuser the will worsks as variable

so globalFunction as in memo as undfine the the after the coem to var globalFunction line the funtion will store the innthe var globalFunction;


*/


