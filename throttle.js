
function throttle(fn, delay){
    let lastcall=0;
    return function(...args){
        const now=Date.now();
        if(now-lastcall < delay){
            return;
        }
        lastcall=now;
        return fn(...args);
    }
}

function sendchatmessage(meassge){
    console.log(`Sending Message`,meassge);
}

const sendchatmessageWihtSlowMode=throttle(sendchatmessage,1000);

sendchatmessageWihtSlowMode('hi')
sendchatmessageWihtSlowMode('hello')
sendchatmessageWihtSlowMode('hello sir ji')
sendchatmessageWihtSlowMode('sir jio next cohort kab hogo')
sendchatmessageWihtSlowMode('sir ji age ky akrna hoga')
