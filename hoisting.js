// x=30;
// console.log(x);
// var x=10;

// in this the hoisting for var will ge the vakue of as 30 without inisaling to the in this var is define as so it will take the x as out any error


//for the let the it eill hae the death zone for elt and cost
//let and const will host but you will nort exxesd the let can const but we cant exexes the beause of temory death zone

// x=30;
// console.log(x);
// //deathzone ends
// let x=10;


// in this the meo will will take the let x as undeinde 

getName();  //for the function in the memo it is alredy declear it;
console.log(x);
var x=7;
function getName(){
    console.log("namaste js")
}

//output;
//nastste js
//undefine

//undefine => it is degine in next line but assing before
//nodefine => in this the value is not defie the code log(x) but var x is not in the code



getName(); //undefine
egtName2() //undefine
console.log(x);//undfine
var x=7;
var getName=()=>{ //for the arroe function it behave like a varable type only
    console.log("namaste js")
}
var egtName2 =function(){ // same in this it behave like a varible 

}




//let and const

console.log(b);//undefine
console.log(a);//refernceerror cant acces befor initilatiztion in meno it is declear but not in Global space it is with some script(seprate another space)
let a=10;
var b=100;



console.log(a1);
let a1=10;
var b=100; //it is in window object window.b=>(globle obejct)


// for till firtl line excute the firs the a is decler in script meom undefined
//till it inttaialize the vaulue 10 => is temporal Dead Zone




// const b;
// b=15; //syntaxError


const b1=10;
b1=100; //typeError => assigment to constant varibale


//sysntaxEroor => if we redecler varibale again or dont givig the value to the const again
//refrenceError=> if js engine try to find the varble in memo space and you can not exces it;
//this is example of refence error  
// log(a)  
// let a=100;


//Yes — in JavaScript, const variables do have a temporal dead zone, just like let variables.