// var elem1= document.querySelector("#elem1");
// var elemImg= document.querySelector("#elem1 img");


// elem1.addEventListener("mousemove", function(dets){
    
//     elemImg.style.left=dets.x+"px"
//     elemImg.style.top=dets.y+"px"
// })
// elem1.addEventListener("mouseenter", function(dets){
//     elemImg.style.opacity="1"
// })
// elem1.addEventListener("mouseleave", function(dets){
//     elemImg.style.opacity="0"
// })

var elems = document.querySelectorAll(".elem");

elems.forEach(function(val) {
    let img = val.querySelector("img"); 

    val.addEventListener("mouseenter", function() {
        img.style.opacity = "1";
    });

    val.addEventListener("mouseleave", function() {
        img.style.opacity = "0";
    });

    val.addEventListener("mousemove", function(dets) {
        img.style.left = dets.offsetX + "px";
        img.style.top = dets.offsetY + "px";
    });
});

