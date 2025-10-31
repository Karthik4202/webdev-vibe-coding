alert("This is Alert");

var result = confirm("Are you 18 years old or above?");
console.log("Are you 18 years old or above ? ")
console.log(result);

var number1 = prompt("Enter Number 1 : ");
var number2 = prompt("Enter Number 2 : ");

var sum = number1+number2;

console.log("Number 1 + Number 2 Before TypeCasting : "+sum);

number1 = Number(number1);
number2 = Number(number2);

sum = number1+number2;

console.log("Number 1 + Number 2 After TypeCasting : "+sum);

//Difference between var and const : var variable can be reassigned but const variable cannot be reassigned.

