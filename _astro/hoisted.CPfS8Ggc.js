const e=document.querySelector(".theme-controller");e?.addEventListener("change",()=>{const t=e?.checked?e?.value:e?.getAttribute("data-unchecked-value");localStorage.setItem("theme",t??"")});
