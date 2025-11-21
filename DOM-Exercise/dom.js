// console.log(Math.floor(Math.random()*256));

let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);

let allBoxes = document.querySelectorAll(".box");
let containerDiv = document.querySelector(".container");

containerDiv.style.gap="20px";


let btn = document.querySelector("button");

btn.addEventListener('click',function(){

    allBoxes.forEach(box => {
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        box.style.backgroundColor = `rgb(${r},${g},${b})`;
});
})
