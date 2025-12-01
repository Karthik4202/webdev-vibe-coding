let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');

let button = document.querySelector('button');
let img1Attribute = img1.getAttribute('src');
let img2Attribute = img2.getAttribute('src');
console.log(img1Attribute);
console.log(img2Attribute)


button.addEventListener('click',()=>{

    let img1Attribute = img1.getAttribute('src');
let img2Attribute = img2.getAttribute('src');
console.log(img1Attribute);
console.log(img2Attribute)

    img1.setAttribute('src',img2Attribute);
    img2.setAttribute('src',img1Attribute);
})