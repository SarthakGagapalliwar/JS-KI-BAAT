function debounce(fn,delay){
    let timerId;

    return function(...args){
        clearTimeout(timerId);
       timerId=setTimeout(()=>{
            fn(...args);
        },delay);
    };
}

const search = (query) =>{
    console.log(`seaching for`,query);
}

const searchWithDebounce =debounce(search,1000);

searchWithDebounce('hard')
searchWithDebounce('hard js')
searchWithDebounce('hard js2')
searchWithDebounce('hard js5555')
searchWithDebounce('hard js55555577888')


