// let run = document.querySelector('#run');
// let curr = document.querySelector('.currname');
// let nameeeor = document.querySelector('.nameError');

// // run.addEventListener('input', function(e) {
// //     curr.innerHTML = e.target.value;
// // });

// run.addEventListener('input', function(e) {
//     let name=e.target.value;
//     if(name.length <3 ){
//         nameeeor.innerHTML='name error'
//     }else{
//         nameeeor.innerHTML='';
//     }
// });




// let child=document.querySelector('.child');
// child.addEventListener('click',(e)=>{
//     console.log(e.target.closest('.parent'));
    
// })



let pass = document.querySelector('#pass');
let show = document.querySelector('#show');

show.addEventListener('click', () => {
    pass.type = pass.type === 'password' ? 'text' : 'password';
    show.innerHTML=pass.type==='password'? 'show':'hide'
});
