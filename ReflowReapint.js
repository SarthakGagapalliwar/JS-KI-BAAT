// 1. Reflow (Layout)
/* 
 Reflow happens when the geometry of the page changes – 
 meaning the browser needs to recalculate the positions and sizes of elements.

 Why?
Width changed → affects the layout.
Browser recalculates positions/sizes → Reflow happens (and then repaint because visual also changed).
*/

/*
🔹 2. Repaint
Repaint happens when visual styles change but layout is 
unaffected (no geometry recalculation).

🔎 Why?
Only color changed → layout remains same.
Browser just repaints the pixels → Repaint happens.


| Action                                 | Causes Reflow? | Causes Repaint? |
| -------------------------------------- | -------------- | --------------- |
| Changing **width/height/margin**       | ✅ Yes          | ✅ Yes           |
| Changing **position** (absolute, etc.) | ✅ Yes          | ✅ Yes           |
| Changing **color/background**          | ❌ No           | ✅ Yes           |
| Changing **visibility: hidden**        | ❌ No           | ✅ Yes           |
| Changing **display: none** → **block** | ✅ Yes          | ✅ Yes           |

 
*/


// code1


//this is code will take more then beause it is take 100 refloe and 100 repain

for(let i=0; i<100; i++){
    let para =document.createElement('p');
        para.textContent="this is para " +i;
        document.appendChild(para);
}
/*
👉 What happens here:
Each appendChild immediately inserts the <p> into the DOM.
Browser must recalculate layout (reflow) and then draw pixels (repaint) for each paragraph.
Since you loop 100 times → you trigger 100 reflows + 100 repaints.
Very slow for large numbers.
*/



// code2 

const t3=performance.now();

let mydiv =document.createElement('div');

for(let i=1; i<=100; i++){
    let pare = document.createElement('p');
    pare.textContent="this is parar "+i;
    mydiv.appendChild(para);
}
document.body.appendChild(mydiv);

/* 
👉 What happens here:
All <p> tags are appended into mydiv (which is not yet in DOM).
Since it’s not in DOM, the browser doesn’t do reflow/repaint for each <p>.
When you finally append mydiv → browser performs 1 reflow + 1 repaint for the whole div.
✅ Much better than Code 1.
*/



// Document Frtagement

//best code

let fragment = document.createDocumentFragment();


for(let i=1; i<=100; i++){
    let pare = document.createElement('p');
    pare.textContent="This is pare " +i;
    //this line will not take  NO refloe and NO repaint below line
    fragment.appendChild(pare);
}
//this line taeke 1 reflow and 1 repaint
document.body.appendChild(fragment);

/*
👉 What happens here:
DocumentFragment is a lightweight container outside the DOM tree.
Appending into the fragment does not cause reflow/repaint at all.
When you finally append the fragment → the browser inserts all children at once.
Only 1 reflow + 1 repaint occurs for the entire batch.
✅ Fastest and most efficient for large DOM insertions.





Key Takeaway:
Each append to a “live DOM” = triggers reflow + repaint.
Batching changes (div or fragment) = reduces operations.
DocumentFragment is the most efficient way to insert many nodes.
*/



/*
Reflow (Layout): Happens when the browser recalculates element positions or sizes due to changes in geometry (e.g., width, height, margin).
Repaint (Render): Happens when the visual appearance changes without affecting layout (e.g., color, background).
Tip: Reflow is more expensive than repaint, so batch DOM changes or use DocumentFragment to improve performance.
*/


/*
Goal: You usually want fewer reflows and repaints only when necessary.
Reason:
Reflow is expensive because the browser recalculates layout for affected elements and their children.
Repaint is cheaper, it only redraws pixels without recalculating layout.
Best practice: Batch DOM changes, use DocumentFragment or hidden containers, and only update styles that require repaint, not reflow.
So the correct way to say it: “Minimise reflows, repaints are okay but avoid unnecessary ones.” ✅

*/