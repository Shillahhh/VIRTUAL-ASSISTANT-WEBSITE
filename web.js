const menuBar = document.querySelector(".material-symbols-outlined");
const allLinks = document.querySelector(".nav-links");

menuBar.addEventListener("click",function(){
    allLinks.classList.toggle("active")
})