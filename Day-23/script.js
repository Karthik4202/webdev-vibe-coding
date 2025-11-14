//hoisting
console.log(a);
var a = 10;

//Types of functions
//1.Function Statement

function hi(){
    console.log("Function Statement");
}
hi();

//2.Function Expression

let b = function(){
    console.log("Function Expression");
}
b();

//3.Anonymous Function
/*
syntax 
function(){

}
used in foreach etc.
*/

//4.Fat Arrow Functions
let sum = (a,b)=>{
    console.log(a+b);
}
sum(1,2);

//Rest Operator
//if you want to pass as many as arguements and the function should accept then use rest operator and it returns an array
function print(...rest){
    console.log(rest);
}

print(1,2,3,4,5);

//iife(Immediately invoked function expression)
(function abc(){
    let num = 10;
    console.log(num);
})()

