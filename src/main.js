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

// class PragmaBot {
//   render() {
//     // create the chat bubble container
//     const bubbleContainer = document.createElement("div");
//     bubbleContainer.style.fontFamily =
//       "system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

//     // create the chat bubble button
//     const bubbleButton = document.createElement("button");
//     bubbleButton.style.position = "fixed";
//     bubbleButton.style.bottom = "1.25rem"; // 5 in tailwindcss is 1.25rem
//     bubbleButton.style.right = "1.25rem"; // 5 in tailwindcss is 1.25rem
//     bubbleButton.style.zIndex = "10000000";
//     bubbleButton.style.borderRadius = "9999px"; // rounded-full in tailwindcss is 9999px
//     bubbleButton.style.backgroundColor = "black";
//     bubbleButton.style.padding = "0.75rem"; // 3 in tailwindcss is 0.75rem
//     bubbleButton.style.fontSize = "1.5rem"; // text-2xl in tailwindcss is 1.5rem
//     bubbleButton.style.color = "white";
//     bubbleButton.style.cursor = "pointer"; // to make it obvious that it's a button

//     // create SVG for the chat bubble button
//     const bubbleSVG = document.createElementNS(
//       "http://www.w3.org/2000/svg",
//       "svg"
//     );
//     bubbleSVG.setAttribute("stroke", "currentColor");
//     bubbleSVG.setAttribute("fill", "currentColor");
//     bubbleSVG.setAttribute("stroke-width", "0");
//     bubbleSVG.setAttribute("viewBox", "0 0 24 24");
//     bubbleSVG.setAttribute("height", "1em");
//     bubbleSVG.setAttribute("width", "1em");

//     const bubblePath = document.createElementNS(
//       "http://www.w3.org/2000/svg",
//       "path"
//     );
//     bubblePath.setAttribute(
//       "d",
//       "M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"
//     );

//     // Append everything
//     bubbleSVG.appendChild(bubblePath);
//     bubbleButton.appendChild(bubbleSVG);
//     bubbleContainer.appendChild(bubbleButton);

//     return bubbleContainer;
//   }
// }

// window.PragmaBot = PragmaBot;

class PragmaBot {
  constructor() {
    this.chatBubble = this.renderChatBubble();
    this.chatDialog = null; // We will initialize this when the chat bubble is clicked for the first time
    document.body.appendChild(this.chatBubble);

    document.addEventListener("click", (event) => {
      const isClickInsideBubble = this.chatBubble.contains(event.target);
      const isClickInsideDialog = this.chatDialog?.contains(event.target);
      if (!isClickInsideBubble && !isClickInsideDialog) {
        this.chatDialog.style.display = "none";
      }
    });
  }

  renderChatBubble() {
    // Create the chat bubble button
    const bubbleButton = document.createElement("button");
    bubbleButton.id = "pragmaBotChatBubble";
    bubbleButton.style.position = "fixed";
    bubbleButton.style.bottom = "1.25rem";
    bubbleButton.style.right = "1.25rem";
    bubbleButton.style.zIndex = "10000000";
    bubbleButton.style.borderRadius = "9999px";
    bubbleButton.style.backgroundColor = "black";
    bubbleButton.style.padding = "0.75rem";
    bubbleButton.style.fontSize = "1.5rem";
    bubbleButton.style.color = "white";
    bubbleButton.style.cursor = "pointer";
    bubbleButton.style.transition = "transform 0.3s ease"; // For hover effect

    bubbleButton.addEventListener("mouseover", function () {
      bubbleButton.style.transform = "scale(1.1)";
    });

    bubbleButton.addEventListener("mouseout", function () {
      bubbleButton.style.transform = "scale(1)";
    });

    bubbleButton.addEventListener("click", () => {
      if (!this.chatDialog) {
        this.chatDialog = this.renderChatDialog();
        document.body.appendChild(this.chatDialog);
      } else {
        this.chatDialog.style.display =
          this.chatDialog.style.display === "none" ? "block" : "none";
      }
    });

    // Create SVG for the chat bubble button
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

    return bubbleButton;
  }

  renderChatDialog() {
    // Create the chat dialog
    const dialog = document.createElement("div");
    dialog.style.position = "fixed";
    dialog.style.bottom = "10rem"; // adjust as per requirements
    dialog.style.right = "1.25rem";
    dialog.style.zIndex = "10000001";
    dialog.style.backgroundColor = "white";
    dialog.style.padding = "1rem";
    dialog.style.width = "300px"; // adjust as per requirements
    dialog.style.height = "400px"; // adjust as per requirements
    dialog.style.borderRadius = "20px";
    dialog.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";

    // Create the iframe
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/SswqR93VcxY"; // put your iframe source here
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    // Create the title bar
    const titleBar = document.createElement("div");
    titleBar.textContent = "Chat with PragmaBot"; // Your title
    titleBar.style.backgroundColor = "#f5f5f5"; // Adjust as per your theme
    titleBar.style.padding = "0.5rem";
    titleBar.style.borderBottom = "1px solid #ddd";
    titleBar.style.fontSize = "1.2rem"; // Adjust as per your theme
    titleBar.style.fontWeight = "500";

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.textContent = "X"; // You can use an SVG or an icon font here
    closeButton.style.position = "absolute";
    closeButton.style.right = "0.5rem";
    closeButton.style.top = "0.5rem";
    closeButton.style.background = "none";
    closeButton.style.border = "none";
    closeButton.style.fontSize = "1.2rem";
    closeButton.style.cursor = "pointer";

    closeButton.addEventListener("click", () => {
      dialog.style.display = "none";
    });

    dialog.appendChild(iframe);
    dialog.appendChild(titleBar);
    dialog.appendChild(closeButton);
    dialog.appendChild(iframe);

    return dialog;
  }
}

window.PragmaBot = PragmaBot;
