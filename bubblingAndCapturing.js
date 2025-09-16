/*
<div granparent>
   <div granparent>
    <div child></div>
    </div>
</div>
*/ 

document.querySelector("#granparent")
.addEventListener('click',()=>{
    console.log("Grand parent");
})

document.querySelector("#granparent")
.addEventListener('click',()=>{
    console.log(" parent");
})

document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("child");  
})


//bubbling bottom to up;
//capturring top to bottom

// if child click  output=> child partent grandparent
//if parent click output => parent grandparent


document.querySelector("#child").addEventListener('click',()=>{
    console.log("child");  
}, true)
//false=>bubblin
//true=>capturing

//if i give the 3 parent in this true then capturing will happen top to bottom
//if i ahev give true to all then output will be after clcing the child => granaprent parent child


//if grandparnt is true then parent is false and child is true =>output will bw=> grandparent child then parent
// beasuse all time chapturing will first then bubbling


//to stop this propagastion
document.querySelector("#child")
.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("child");  
})


//if i give stopProation in patent in bubbling and clcik in child the outpout will=>
// gradparent and parent

//if i same in child==> so  in this only child will call;


//in capturing if child have stop propagation  clicked on clcid => then output=> all will print

// a put in garandpatrent in caturing then clcik to child then only=> grandparent will print