//Higher Order Functions
//It returns the functions or it the accepts the fuctions in the parameter is called higher order function
//1. It returns the function
function hello(){
    return function(){
        console.log("hello");
    }
}
hello()();

//2.It accepts the function

function square(number){
    return number*number;
}



function numbersOperation(array,operator){
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(operator(array[i]));
    }
    return result;
}
const arr = [1,2,3,4,5];
let doubledArray = numbersOperation(arr,square);
console.log(doubledArray);

//the function that is passed as a arguement to the higher order function is called callback function
// in our case the square() is called callback function

//pure function-a pure function will always produce the same output , it does not rely on any external state or the data that will change the result
//example it doesnt not modify global variables

function add(a,b){
    return a+b;
}

//impure function- it relies on external state its output is not relied on arguements passed but also the external variables
 let counter = 0;

function incrementCounter() {
  counter++; 
  console.log("Counter:", counter);
}

//first class function - it refers to the function they can be stored in a variable,can be passed as an arguement to other function or returned by another function

//Map - it creates a new array

let numbers = [1,2,3,4,5];

let result = numbers.map(function(value){
    return value*2;
})
console.log(result);

//Difference between map and foreach is map is used to transform each element and store in a new array containing the results of that transformation. it doesnot modify the original array
//foreach is also used to perform the action on each element but it doesnt return a new array as a result 
//So if you want the result to be stored in a new array use map 

//closures
// a function remembers the variables of the place where it was created
//even if that place(outer function) is finished, the inner function will still remember and use the variables;
function incre(){
    let a = 0;

    function increment(){
        a++;
        console.log(a);
    }

    return increment;
}

let fn = incre();
fn();//a value 1 
fn();//a value 2

//here the outer() is finished but the inner() function still remembers the count. This is called closure