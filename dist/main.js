(()=>{"use strict";(()=>{const t=document.getElementById("left-arrow"),e=document.getElementById("right-arrow"),d=document.getElementById("slider");let s=1;const c=()=>{d.style.backgroundImage=`url(./img/${s}.jpg)`},o=()=>{const t=document.querySelectorAll(".dot");for(let e=0;e<3;e+=1)t[e].classList.contains("active-dot")&&(t[e].classList.remove("active-dot"),t[e].classList.add("disable-dot"));t[s-1].classList.remove("disable-dot"),t[s-1].classList.add("active-dot")};t.addEventListener("click",(()=>{1===s?s=3:s>1&&(s-=1),c(),o()})),e.addEventListener("click",(()=>{3===s?s=1:s<3&&(s+=1),c(),o()}));const l=document.getElementById("dots");for(let t=1;t<=3;t+=1){const t=document.createElement("div");t.classList.add("dot"),t.classList.add("disable-dot"),l.appendChild(t)}o()})()})();