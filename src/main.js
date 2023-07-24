// function App() {
//   return (
//     <>
//       <div id="chat-bubble-container">
//         <div className="fixed bottom-5 right-5 z-50">
//           <div className="relative"></div>
//           <div>
//             <button className="z-[10000000] rounded-full bg-black p-3 text-2xl text-white transition-transform hover:scale-110">
//               <div className="icon-closed scale-in-center">
//                 <svg
//                   stroke="currentColor"
//                   fill="currentColor"
//                   stroke-width="0"
//                   viewBox="0 0 24 24"
//                   height="1em"
//                   width="1em"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"></path>
//                 </svg>
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// class PragmaBot {
//   constructor() {
//     this.button = document.createElement("button");
//     this.button.className =
//       "z-[10000000] rounded-full bg-black p-3 text-2xl text-white transition-transform hover:scale-110";

//     const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//     svg.setAttribute("stroke", "currentColor");
//     svg.setAttribute("fill", "currentColor");
//     svg.setAttribute("stroke-width", "0");
//     svg.setAttribute("viewBox", "0 0 24 24");
//     svg.setAttribute("height", "1em");
//     svg.setAttribute("width", "1em");

//     const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//     path.setAttribute(
//       "d",
//       "M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"
//     );
//     svg.appendChild(path);

//     const iconClosed = document.createElement("div");
//     iconClosed.className = "icon-closed scale-in-center";
//     iconClosed.appendChild(svg);

//     this.button.appendChild(iconClosed);
//   }

//   render() {
//     return this.button;
//   }
// }

class PragmaBot {
  render() {
    // create the chat bubble container
    const bubbleContainer = document.createElement("div");
    bubbleContainer.style.fontFamily =
      "system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

    // create the chat bubble button
    const bubbleButton = document.createElement("button");
    bubbleButton.style.position = "fixed";
    bubbleButton.style.bottom = "1.25rem"; // 5 in tailwindcss is 1.25rem
    bubbleButton.style.right = "1.25rem"; // 5 in tailwindcss is 1.25rem
    bubbleButton.style.zIndex = "10000000";
    bubbleButton.style.borderRadius = "9999px"; // rounded-full in tailwindcss is 9999px
    bubbleButton.style.backgroundColor = "black";
    bubbleButton.style.padding = "0.75rem"; // 3 in tailwindcss is 0.75rem
    bubbleButton.style.fontSize = "1.5rem"; // text-2xl in tailwindcss is 1.5rem
    bubbleButton.style.color = "white";
    bubbleButton.style.cursor = "pointer"; // to make it obvious that it's a button

    // create SVG for the chat bubble button
    const bubbleSVG = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    bubbleSVG.setAttribute("stroke", "currentColor");
    bubbleSVG.setAttribute("fill", "currentColor");
    bubbleSVG.setAttribute("stroke-width", "0");
    bubbleSVG.setAttribute("viewBox", "0 0 24 24");
    bubbleSVG.setAttribute("height", "1em");
    bubbleSVG.setAttribute("width", "1em");

    const bubblePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    bubblePath.setAttribute(
      "d",
      "M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"
    );

    // Append everything
    bubbleSVG.appendChild(bubblePath);
    bubbleButton.appendChild(bubbleSVG);
    bubbleContainer.appendChild(bubbleButton);

    return bubbleContainer;
  }
}

window.PragmaBot = PragmaBot;
