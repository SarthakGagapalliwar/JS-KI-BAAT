// function statement || fucntion declaration

a()
b()
function a(){
    console.log("a Hello, World!");
}
a()
//function expression
var b = function(){  //same for let and const
    console.log("b Hello, World!");
}
b()

// the diffrence beteen then is hosteing

// if we decler before the function the a() will print but in b() will print error beause till the function it will undifrine





//Anonymous Function=>a function without name it will give syntaxEror
//in functon expression we can use this function
//we can use this funtion as values, like assinging to a variable
// function () {
//     console.log("Hello, World!");
// }




//Named function Expression =>giving the name to the function expression
var b = function xyz(){
    console.log("b Hello, World!");
}
b()
xyz() //we will get error on calling this (refernce error) xyx in not presernt in globle function 




//Diffence between parametrs and Arguments
var b = function (parametrs1,parametrs2){ //this parmeteres are assis only to function only not outsidfe the function
    console.log("b Hello, World!");
}
b(1,2) // int is 1 2  are arguments





//first class function =>a ablityt to use function as a value || or pass as argumnts 
var b=function(param1){
    return function xyz(){

    }
}
console.log(b());

//or
var b=function(param1){
    console.log(param1);
}
b(function(){  // in this we are passing the function as argumnst for another fucntion this is also called first classs fucntion

})


//First class Citizens=> same as first class Fucntion=> Ablity to be used like values
