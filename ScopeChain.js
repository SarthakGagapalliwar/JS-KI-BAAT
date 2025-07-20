
function a(){
    var b=10;
    c();
    function c(){
        console.log(b); //ion this will get 10
        
    }
}
a();
console.log(b);
// inthis we will gate the error 

//lexical env is created when gec crerted => is local memo with + ref to lexical env of parent
//beause in this c is lexical(means inside)(scope chain) inside Enviroment of a function and a is laxical inside global  
