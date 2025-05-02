
// const messages = ["A"," powerful","Blend" ,"of <br>","Humor,"," Resilience,"," And<br>"," Identity."];
// let index = 0;

// function displayWords() {
//     const elements = document.getElementsByClassName("homecontent");
//     if (index < messages.length && elements.length > 0) {
        
//         // const formattedMessage = messages[index].toUpperCase(); 
//         elements[0].innerHTML += formattedMessage + " ";
//         index++;
//         setTimeout(displayWords, 1000); 
//     }
// }


// function startDisplayAfterDelay() {
//     setTimeout(displayWords, 1000); 
// }
// window.onload = startDisplayAfterDelay;

// <!DOCTYPE html>
// <html>
// <head>
//     <title>Word Delay Example</title>
//     <style>
//     .text-container {
//         display: inline-block;
//         position: relative;
//     }

//     .word {
//         opacity: 0;
//         transition: opacity 0.5s ease-in;
//         position: absolute;
//         top: 0;
//         left: 0;
//     }

//     .word:nth-child(2) {
//         left: 150px;
//     }

//     .word:nth-child(3) {
//         left: 250px;
//     }
//     </style>
// </head>
// <body>
//     <div class="text-container">
//         <span class="word">Hello</span>
//         <span class="word">world</span>
//         <span class="word">!</span>
//     </div>

//     <script>
//     const words = document.querySelectorAll('.word');
//     let delay = 0;

//     words.forEach(word => {
//         setTimeout(() => {
//             word.style.opacity = 1;
//         }, delay);
//         delay += 300;
//     });
//     </script>
// </body>
// </html>
