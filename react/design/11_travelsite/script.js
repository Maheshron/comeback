const menuBtn = document.querySelector(".close");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("close");
})