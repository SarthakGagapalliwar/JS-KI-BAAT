//   function myFunction() {
//         document.querySelectorAll(".first1").forEach(el => {
//             el.innerHTML = "Text Change";
//         });
//     }

     function myFunction() {
            const el = document.getElementById('first');
            if (el.innerHTML === "Text Change") {
                el.innerHTML = "Thisd is my i want to change";
                document.getElementsByTagName('h1')[0].style.color='red';
            } else {
                el.innerHTML = "Text Change";
                document.getElementsByTagName('h1')[0].style.color='black';
            }

        }
