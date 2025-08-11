//humein seekhna factories banana,matble ki app ake barr blueprint bana do ki har boject dhikega and hum log naya naya object with diffeerent valuies bana paayege,yahi upar upar se poora kaam hia OOPS mein



/*


function TodoWork(name, price,color,company){
    this.name=name;
    this.color=color;
    this.price=price;
    this.company=company; //fix hai naame tab

    // this.write=function(text){
    //     let h1=document.createElement("h1");
    //     h1.textContent=text;
    //     h1.style.color=color;
    //     document.body.append(h1);
    // };
}
//agar tuhaara costructor function koi field apne prototype par attch karle to us constructor se banne waala sabhi new instance yaani ki objects,  ke pass wo field automatically chali jaati hia;

//TodoWork.prototype.company="shreyians";


TodoWork.prototype.write=function(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
};
let work1=new TodoWork("work",10,"black","okok");
let work2=new TodoWork("newwork",10,"red","koko");

*/


//Classes
/*
class TodoWork{
    constructor(name,company,price,color){
        this.name=name;
        this.company=company;
        this.price=price;
        this.color=color;
    }
    erase(){
        // document.body.querySelectorAll("h1").forEach(function(ele){
        //     if(ele.style.color===this.color){ //in this function the parent is function this wil undifrin in this so use arrow function
        //         ele.remove();
        //     }
        // })
        document.body.querySelectorAll("h1").forEach((ele)=>{
            if(ele.style.color===this.color){  //int aawo function parent is erase
                ele.remove();
            }
        })

    }

    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
    }
}

let p1=new TodoWork("natr","nat",10,"black");
let p2=new TodoWork("apr","aprs",15,"blue");

*/


//extends,super
/*

class User{
    constructor(name,address,username,email){
        this.name=name;
        this.address=address;
        this.username=username;
        this.email=email;
        this.role="user";
    }
    chekRole(){
        console.log(this.role);
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=`${this.name}: ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(name,address,username,email){
        super(name,address,username,email);
        this.role="admin";
    }
    remove(){
        document.querySelectorAll('h1').forEach(function(ele){
            ele.remove();
        });
    }
}

let u1=new User("harch","pjhsfd","sdhds","seh@sgsdg")
let u2=new User("sujaakl","pjhsfd","sdhds","seh@sgsdg")
let a1=new Admin("Admin","Admin","Admin","Admin@Admin")
*/

//classess inheritance - java cpp
//classes banana and unhe extend kardena



//inheritacne= class -> class;

//prototypal inheritance => object->object

let coffee={
    color:"dark",
    drink:function(){
        console.log("good g0oood");
        
    },
}
let ararbilCoffee=Object.create(coffee);
ararbilCoffee.taste="bitter";
console.log(ararbilCoffee);
console.log( ararbilCoffee.taste);

