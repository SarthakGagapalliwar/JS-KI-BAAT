
//this is block also know as compound statment 
{
    //compound statement
    var a=10;
    console.log(a);
}
//block is that using mutiple statment in one


{
    //like asssing thew value in the scope is block scope
    var a=10; //this var is in the global scope

    //this let and const in the block scope  and now after the block you can not exese theis let and cosnt
    let b=20;
    const c=30;

    console.log(a);
    console.log(b);
    console.log(c);
    
}
    console.log(a);
    console.log(b);//refence erroe will give b is not deine 
    console.log(c);//refence error will give c in not define
    


//shadowing

var a=100;
let b=100;
{
    var a=10; //the a will shadow the a varible a=10 will now 100 willbe transform globle memo itself
    let b=20;
    const c=30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a); //in this a=10
console.log(b); // b wil be 100;
 


//lllegal Shadowing
/*
let a=20;
{
    var a=20;  // this will give synstex error; a is alredy been decelarred
}

*/

/*
let a=20;
{
    let a=20;  // in this it will shadow the same verible if it is alredy declear
}
*/

/*
but in fuction scope var boundery are function scope
let a=20;
function x(){
    var a=20; //no error
}
*/


const a=20;
{
    const a=100;
    {
        const a=200;
        console.log(a); //200 nearest value a;
    }
    console.log(a); //100
}