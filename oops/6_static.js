// class Config{
//     static dbUser= 'usernaem';
//     static bdPassword = 'secret';
//     static apiToken = 'abcd';
// };


// console.log(Config.dbUser);






//INCREMNT
// let id=1; this is not user relerted 

class User{
    // static id=1;
    static cache={
        1:'some value',
    };
    constructor(name,age,income){
        this.name=name;
        this.age=age;
        this.income=income;
        this.id=User.id++;

        // this.id=id++; // this for outside for id witch we have delcrelar
    }

    static chcekCache(){
        console.log(this.cache);
    }

    static hasInCache(){
        this.chcekCache();
    }

    static{
        console.log('Initialized');
        
    }

    //for Utility function

    // static compareByAge(user1,user2){
    //     return user1.age - user2.age;
    // }
    // static compareByIncome(user1,user2){
    //     return user1.income - user2.income;
    // }


}
User.hasInCache(); //it will priunt  w

const user1 = new User('Rakesh k',30,15000);
const user2 = new User('John Doe',40,85000);
const user3 = new User('Jane Doe',20,75200);

const users=[user1,user2,user3]
// users.sort((a,b)=> a.age - b.age)
// users.sort(User.compareByAge)
// users.sort(User.compareByIncome)

// console.log(users);
