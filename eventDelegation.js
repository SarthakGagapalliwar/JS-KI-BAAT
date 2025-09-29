//to handle event better way
//this is achive because of event bubbling

// instead of attaching an event listener to every child element individually, you attach one listener to the parent, 
// and then check which child triggered the event.

<div>
    <ul id="category">
        <li id="laptop"></li>
        <li id="camera"></li>
        <li id="shoes"></li>
    </ul>
</div>

//we want that on clcik on latop go to laptop url simlary to all so will add event to all 
//but this is not good will make the side lode more
//so will add single eelemt to parent

document.querySelector("#category").addEventListener('click',(e)=>{
    console.log("category parent click");

    //if i clcick on any child the parent w ill clcik will print
    console.log(e.target.id);
    if(e.target.tagName=='LI'){
        window.location.href="/"+e.target.id;
    }
    
});



//antoher example of deletaion

<div id="form">
     <input type="text" id="name" data-uppercase></input>
     <input type="text" id="name"></input>
     <input type="text" id="name"></input>
</div>

document.querySelector("#form").addEventListener('keyup',(e)=>{
    if(e.target.dataset.uppercase != undefined){
        e.target.value=e.target.value.toUpperCase();
    }
})



/*
Benefits of Event Delegation:

Saves Memory: Instead of attaching separate event listeners to multiple child elements, you attach a single listener to a parent element.
Less Code: Reduces the number of event listeners, making your code cleaner and easier to maintain.
Handles Dynamic Elements: Works for elements added to the DOM dynamically after the page has loaded.

Drawbacks / Limitations:

Not All Events Bubble: Some events (like focus, blur, mouseenter, mouseleave) do not bubble, so event delegation won’t work with them.
Event Targeting Complexity: You may need extra logic to determine which child element triggered the event (event.target), especially if you have nested elements.
*/ 

