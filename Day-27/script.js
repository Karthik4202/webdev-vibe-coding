//What is DOM?
//Document object model is a structure that represents the HTMl page where we can access the every element and modify the elements using javascript.

//4 steps in dom
//1.Selection Of element 
//2.Changing html
//3.changing css
//4.event listener

//first step : Selection of element 
let h1 = document.querySelector("h1");

//to get any element using any selector we use querySelector function. So here we are using element selector 

//2.Changing the html
h1.innerHTML="Document Object Model"

//3.Changing the CSS
h1.style.color="blue";
h1.style.backgroundColor="lightgreen"

//4.Add Event Listener
h1.addEventListener('click',()=>{
    h1.style.backgroundColor="yellow"
    h1.style.fontSize="16px";
})

