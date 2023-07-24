!function(){"use strict";window.PragmaBot=class{constructor(){this.chatBubble=this.renderChatBubble(),this.chatDialog=null,document.body.appendChild(this.chatBubble),document.addEventListener("click",(t=>{const e=this.chatBubble.contains(t.target),o=this.chatDialog?.contains(t.target);e||o||(this.chatDialog.style.display="none")}))}renderChatBubble(){const t=document.createElement("button");t.id="pragmaBotChatBubble",t.style.position="fixed",t.style.bottom="1.25rem",t.style.right="1.25rem",t.style.zIndex="10000000",t.style.borderRadius="9999px",t.style.backgroundColor="black",t.style.padding="0.75rem",t.style.fontSize="1.5rem",t.style.color="white",t.style.cursor="pointer",t.style.transition="transform 0.3s ease",t.addEventListener("mouseover",(function(){t.style.transform="scale(1.1)"})),t.addEventListener("mouseout",(function(){t.style.transform="scale(1)"})),t.addEventListener("click",(()=>{this.chatDialog?this.chatDialog.style.display="none"===this.chatDialog.style.display?"block":"none":(this.chatDialog=this.renderChatDialog(),document.body.appendChild(this.chatDialog))}));const e=document.createElementNS("http://www.w3.org/2000/svg","svg");e.setAttribute("stroke","currentColor"),e.setAttribute("fill","currentColor"),e.setAttribute("stroke-width","0"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("height","1em"),e.setAttribute("width","1em");const o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d","M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"),e.appendChild(o),t.appendChild(e),t}renderChatDialog(){const t=document.createElement("div");t.style.position="fixed",t.style.bottom="10rem",t.style.right="1.25rem",t.style.zIndex="10000001",t.style.backgroundColor="white",t.style.padding="1rem",t.style.width="300px",t.style.height="400px",t.style.borderRadius="20px",t.style.boxShadow="0 0 10px rgba(0,0,0,0.1)";const e=document.createElement("iframe");e.src="https://www.youtube.com/embed/SswqR93VcxY",e.style.width="100%",e.style.height="100%",e.style.border="none";const o=document.createElement("div");o.textContent="Chat with PragmaBot",o.style.backgroundColor="#f5f5f5",o.style.padding="0.5rem",o.style.borderBottom="1px solid #ddd",o.style.fontSize="1.2rem",o.style.fontWeight="500";const s=document.createElement("button");return s.textContent="X",s.style.position="absolute",s.style.right="0.5rem",s.style.top="0.5rem",s.style.background="none",s.style.border="none",s.style.fontSize="1.2rem",s.style.cursor="pointer",s.addEventListener("click",(()=>{t.style.display="none"})),t.appendChild(e),t.appendChild(o),t.appendChild(s),t.appendChild(e),t}}}();
//# sourceMappingURL=bundle.iife.js.map
