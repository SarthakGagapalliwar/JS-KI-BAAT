"use strict"

//this in global space

console.log(this); //globalObject-> window(in browser) ,global(in node js)


//this inside the function

function x(){
    //the value depents on strick-(undfinine) / non strict mode-(window)
    console.log(this); 
    
}
x()

//this inside non-strict mode - (this substiution)

//if the value of this keyword is undefined or null 
//this keyword will be replaced with globalObject
//only in non strick mode


//this keyword value depends on how this is called (window)

// in stric mode
x() //will give (undefine) without any refece like window.
window.x()//will give (window) on object

//this inside a object' method

const obj ={
    a:10,
    x:function(){ // (x is a method) when use function as a part of an object
        console.log(this);
        console.log(this.a);//this print 10; this->will object , a=10;
    }
}
obj.x(); // in thiskeyword will be the object in method



//call apply bind method (sharing methods)

const student = {
    name:"Akshay",
    printName:function(){
        console.log(this.name); //value of this is object(student)
        
    }
}
student.printName();

const student2={
    name:"deepika",
}
//student2.printName() //we cant do student methode in stdueunt2

//this can be overwrite by call apply and bind mehtod
student.printName.call(student2) //studen2 will be the (this) of the student (like we are overwritng)
//value of this become student2




//this inside arrow function

//arrow function they do not have tere own (this) they take (this) from there lexical context()

const object1={
    a:10,
    x:()=>{ //arrow function
        console.log(this); // in (this) will not the (object1) this will the enclosing lexical context()  (this will behave like this is global space)
    },
};
object.x();//the value will be window object ones again like this object1 leixal is global thats why




//this inside nested arrow function
const object2={
    a:10,
    x:function(){ 
        console.log(this); // in (this) will the (object2) this will behave like this
        const y=()=>{//arrow function
            console.log(this); //in this the value of(this) will a:10; (lexcialy enclosing in this object2 is lexcail inclose) fror arow function only
        }
    },
};
object2.x();




//this inside the DOM elements => refence to HTMLelement


//this inside class,constructor
 
/*
Inside a class constructor, this refers to the instance of the class being created.

*/
class Person {
  constructor(name, age) {
    this.name = name; // 'this' refers to the new object being created
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Sarthak", 21);
person1.greet(); // Output: Hi, I'm Sarthak and I'm 21 years old.


// Key Points:
//Inside the constructor, this is the newly created object (person1 in this case).
//Each method in the class can access the instance properties using this.


//Be careful with this in callbacks:
//In some situations, like inside a regular function or a callback, this may not refer to the class instance. For example:

class Example {
  constructor() {
    this.value = 100;

    // setTimeout is a global function, not bound to the class
    setTimeout(function () {
      console.log(this.value); // undefined or global value
    }, 1000);
  }
}

//To fix that, you can use an arrow function (which captures this lexically):
class Example {
  constructor() {
    this.value = 100;

    setTimeout(() => {
      console.log(this.value); // Correctly prints 100
    }, 1000);
  }
}
