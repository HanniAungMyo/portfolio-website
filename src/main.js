const menuBar = document.getElementById("menubar")
const navMenu=document.getElementById("nav-menu")
const closeIcon=document.getElementById("nav-close")
const navLink=document.querySelectorAll(".nav_link")

// navLink.forEach(link => 
//     link.addEventListener("click",()=>{
//      navMenu.classList.add("hidden")
//     }) 
// );
navLink.forEach(link=>
    link.addEventListener("click",()=>{
navMenu.classList.add("hidden")
    })
)

closeIcon.addEventListener("click",()=>{
  navMenu.classList.add("hidden")
})
menuBar.addEventListener("click",()=>{
    navMenu.classList.remove('hidden')

})