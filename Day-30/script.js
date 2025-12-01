let childDiv = document.querySelector(".child");
let h2 = document.querySelector("h2");

//click
childDiv.addEventListener('click',(event) => {
    h2.innerHTML=`${(event.type).toUpperCase()}`
    console.log("click", event.type);
});

//dblclick
childDiv.addEventListener("dblclick", (event) => {
    h2.innerHTML=`${(event.type).toUpperCase()}`
    console.log("Double Clicked", event.type);
});

//mouseenter
let interval = 0
childDiv.addEventListener("mouseenter", (event) => {
    h2.innerHTML=`${(event.type).toUpperCase()}`
    interval = setInterval(() => {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
    
        childDiv.style.backgroundColor = `rgb(${r},${g},${b})`;
    }, 200);
});

//mouseleave
childDiv.addEventListener("mouseleave",(event)=>{
    h2.innerHTML=`${(event.type).toUpperCase()}`
    console.log(event.type)
    clearInterval(interval);
})

//scroll
window.addEventListener('scroll',(event)=>{
    console.log(event.type);
    h2.innerHTML=`${(event.type).toUpperCase()}`
})

window.addEventListener('keyup',(event)=>{
    console.log(event.type);
    h2.innerHTML=`${(event.type).toUpperCase()}`
})