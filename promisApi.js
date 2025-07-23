// prmois.all it will take all element store as array like example if one of those ends in total time to finish it the last one who get like 1 5 9 after 9 it will excute it  if one of those it fail then all will be fail (Fail Fast)

//promis.allSetteled() => same as promis.all for succes case but in the failer it will diffrent 
//live example if we have p1 p2 p2 3s 1s 2s  if there is an error in p2 it will still wait for other to excute and it will give output of all like val1 err2 val3    error for p2->err2
//return the object of status and value;

//promis.race same example p1 p2 p2 3s 1s 2s  after 1s it will give the first settle promis (val2)    it there is error in p2 then it will return (error) for p2
//(return first steeteled promis)

//promise.any=> with for the first success or fullfill from upper example if p2 get fail then lost time take will print the frist suceess value if all will fail then the retun the aggergate error and this will be all error of value
//print in form of list for all error
//(return frist steeteled sucees or fullfil prommise )seeking for first succes



/*

         Settle
         /   \
   resolve  reject

         Settle
         /   \
     succes  failure

         Settle
         /   \
  fulfilled  rejected
  
 */


const p1=new Promise((resolve, reject)=>{
    setTimeout(()=>
        resolve("P1 succes"),
    3000);
})
const p2=new Promise((resolve, reject)=>{
    setTimeout(()=>
        // resolve("P2 Error"),
        reject("P2 Error"),
    5000);
})
const p3=new Promise((resolve, reject)=>{
    setTimeout(()=>
        resolve("P3 succes"),
    1000);
})

Promise.all([p1,p2,p3]).then(res=>console.log(res))
.catch((err)=>{
    console.error(err);
    
});

Promise.allSettled([p1,p2,p3]).then(res=>console.log(res))
.catch((err)=>{
    console.error(err);
    
});

Promise.race([p1,p2,p3]).then(res=>console.log(res))
.catch((err)=>{
    console.error(err);//wait for first settel succes/reject
    
});
Promise.any([p1,p2,p3]).then(res=>console.log(res))
.catch((err)=>{
    console.error(err); //wait for first settel succes
    //if all fails it will give (aggregateError) array
    // for all print aggergateerror;
    console.log(err.errors); //print in form of list
    
});

 
