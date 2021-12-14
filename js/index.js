let btns=document.querySelectorAll(".btn")

btns.forEach(btn=> {
    btn.addEventListener("click",function () {
        let boxs=document.querySelectorAll(".box")
        boxs.forEach(b => {
            b.style.backgroundColor="grey"
        });
        let colorId=btn.getAttribute("data-id")
        let box=document.getElementById(colorId)
        box.style.backgroundColor=colorId
    })
});


let button=document.querySelector(".side-bar-btn")
let sideBar=document.querySelector(".side-bar")

button.addEventListener("click",()=>{
        sideBar.style.width="100px"
        sideBar.style.opacity="1"
})  