var arr = [
    {
        dp: "https://plus.unsplash.com/premium_photo-1755524311619-c6739ded0d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
    },
    {
        dp: "https://images.unsplash.com/photo-1723464340947-247673835ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
        story: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
    },
    {
        dp: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBnaXJsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1717488703065-6968d2d143b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1721461975113-b5bdeb915503?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
    }
]

var clutter= "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
document.querySelector("#sroeiya").innerHTML=clutter

// document.querySelector("#sroeiya").addEventListener("click",function(dets){
   
//    document.querySelector("#Fullscreen").style.display="block";
//    document.querySelector("#Fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`;

//    setTimeout(function(){
//     document.querySelector("#Fullscreen").style.display="none";
//    },3000)
// })



let timer;
function showStory(staringIdx){
    let i=staringIdx;

    function nextStory(){
        if (i >= arr.length) {
            // hide fullscreen after last story
            document.querySelector("#Fullscreen").style.display = "none";
            return;
        }

        document.querySelector("#Fullscreen").style.display = "block";
        document.querySelector("#Fullscreen").style.backgroundImage = `url(${arr[i].story})`;

        i++;
        timer=setTimeout(nextStory,3000);
    }
    nextStory();
}

document.querySelector("#sroeiya").addEventListener("click", function (dets){
     if (dets.target.tagName === "IMG") {
        clearTimeout(timer);
         let index = parseInt(dets.target.id);
         showStory(index);
     }
})


