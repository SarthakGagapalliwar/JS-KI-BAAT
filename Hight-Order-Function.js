
//A fucntio takes an anothe funtion as argunment or return as is Higher order function


function x(){  //in this x is the call back fucnion 
    console.log("Namaste");
    
}
function y(x){ //in this y is hight order function
    x();
}




const radius =[3,1,2,4];

const calculateArea=function(radius){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));




const calculateCircumference=function(radius){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));


const calculateDiameter=function(radius){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(2*radius[i]);
    }
    return output;
}
console.log(calculateDiameter(radius))



//now we will write in optimed why DRY principle dont repeat yourself

const radius2 =[3,1,2,4];

const area = function(radius){
    return Math.PI*radius*radius;
}
const circumference = function(radius){
    return 2*Math.PI*radius;
}
const diameter=function(radius){
    return 2*radius;
}
const calculate=function(radius,logic){
    const output=[];
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius2,area));
console.log(calculate(radius2,circumference));
console.log(calculate(radius2,diameter));



//we can use map also
console.log(radius2.map(area));


//if we want to do same thing without map we will use Array.prototype.calcaulte
Array.prototype.calculate2=function(logic){
    const output=[];
    for(let i=0; i<this.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}
console.log(radius2.calculate2(area));




//A functio is pass into High order functuin is called callback Function
//In JavaScript, functions are first-class citizens

/* 
It means that functions in JavaScript are treated like any other variable. You can:

Assign them to variables

Pass them as arguments to other functions

Return them from other functions

Store them in arrays or objects

This makes JavaScript a functional programming language as well.



Why First-Class Functions Matter:
Because of this, JavaScript supports:

Callbacks (used in event handling, timers, etc.)

Higher-order functions (like .map(), .filter(), etc.)

Functional programming techniques

Async patterns like Promises and async/await

🧠 Summary:
In JavaScript, functions are first-class citizens, meaning they can be treated like any other value — assigned to variables, passed to and returned from other functions. This allows for powerful programming patterns such as callbacks, closures, and higher-order functions.



new file is created as Hight-Order-Function in detail
*/