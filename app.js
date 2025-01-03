let body = document.querySelector("body");
let menu = document.querySelector("#menu i");
let cross = document.querySelector("main #full i");
let full = document.querySelector("main #full");

menu.addEventListener("click",() => {
    full.style.left = "0%";
    body.style.overflow = "hidden";  
})

cross.addEventListener("click",() => {
    full.style.left = "-100%";
    // body.style.overflow = "scroll";
})

