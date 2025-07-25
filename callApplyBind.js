let name={
    fristname:"Akshay",
    lastname:"Kumar",
    printFullName:function(){
        console.log(this.fristname+ " "+this.lastname);
    }
}

let printFullName2=function(hometown,state){
    console.log(this.fristname+ " "+this.lastname + " from "+hometown+" state "+state);
}
name.printFullName();

let name2={
    fristname:"Sachin",
    lastname:"Tendulkar",
}
//function borrowing
// name.printFullName.call(name2); //in (this) is pointed to name2

printFullName2.call(name2,"dehradun","uttrakhand"); //pass by induvely by seprteted by(,) (invoke directly)


printFullName2.apply(name2,["dehradun","uttrakhand"]); //in thid we jsut need to pass by array list only


//bind method //it will give a copy witch can we invoke later
let printmyname=printFullName2.bind(name2,"dehradun","uttrakhand");
console.log(printmyname); //it will give a function
printmyname();



//currying in js

let multipl=function(x,y){
    console.log(x*y);
}

let multiplbytwo=multipl.bind(this,2);
multiplbytwo(5); //this is currying when we pass second arrgument in aclling function 

let multiplbythree=multipl.bind(this,2,3);
multiplbythree(5); //in this the carring will fail beause we pass all the arumgent in the blind and it will ignore 5 


//curring by closers

let mutable=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplby2=mutable(2);
multiplby2(3);