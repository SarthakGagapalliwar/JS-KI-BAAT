//Execution context;

//js->lxical scoping -> ki app kaha par pysically avaliable ho ye poori tareeke se depent karta hia ki app kya access kar paaoge

// function abcd(){
//     let a=12;
//     function def(){
//         console.log(a);
//     }
//     def()
// }
// abcd()


//dynamic scoping->kaha se call kr r he ho uspe depend kareg ki  kya value milegi

// let a=12;
// function abcd(){
//     console.log(a);

// };
// function def(){
//     let a=13;
//     abcd();
// }
// def();   //agar ye dynamic scope hot tho ye 13 print kartha



//Closures hote hai function jo ki kisi parent fnc ke andar ho aur ander waala function return ho raha  ho,and returninig fnc youse kare, parentt function ka koi variable

// function abcd() {
//     let a = 12;
//     return function () {
//         console.log(a);
//     };
// }
// abcd()
//this whole called closueres

//faayde nuksaan par
//private variable
//global pollution


//ye sac hia fnc ke khatam hon pe aapka fnc anduske variables khtm hojaate hia,par jab bhi closure banta hia to appka fnc aur uske variables ka ek backline banaya jaata hia aur uska naam hota hai [[environmnet]]



/*


function countForme(){
    let c=0;
    return function(){
        c++;
        console.log(c);
    };
}
let fun12=countForme(); //fun is function
fun12(); //1
fun12(); //2
let fun1=countForme(); //fun is function
fun1(); //1
fun1(); //2
fun1(); //3

*/

//encapsulation
/*
function clickLimiter() {
    let click = 0;
    return function () {
        if (click < 5) {
            click++;
            console.log(`click : ${click} times`);
        }else{
            console.error("LIMIT exiced, try after some time");
        }
    };
}

fun()
fun()
fun()
fun()
fun()
fun()
click=0;
fun() //this will not chage same errror 

*/





