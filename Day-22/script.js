//continue keyword- to skip a iteration in forloop we use the continue keyword
//write a forloop that loops through an array of ["London,"New York","Paris","Berlin"] and should skip "Paris". Store the other cities in a new array named visited cities

let cities = ["London","New York","Paris","Berlin"];
let visitedCities = []

for(let i = 0; i < cities.length; i++){
    if(cities[i]==="Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}

console.log(visitedCities);

//for of loop - it us used for iterating the values of arrays strings etc
//use a for of loop to iterate over an array and when 4 is found store the before numbers in array named small numbers
let numbers = [1,2,3,4,5];
let smallNumbers = []

for (const num of numbers) {
    if(num === 4){
        break;
    }
    smallNumbers.push(num);
}
//why const because the value wont change or we are not reassigning the value
console.log(smallNumbers);

//for in loop is used to iterate over key-value pairs in an object 

const person = {
    firstName : "Karthik",
    lastName : "Kamuni",
    age : 23,
    email : "Kamunikarthik1234@gmail.com"
}

for (const key in person) {
    console.log(`${key} : ${person[key]}`);
}

/*
Forloop -> when you know start and end index and if you want to use index and we can use break and continue
For Of -> want to get cleaner version of code than foreach then we go for ForOf and we can use break and continue
For in -> for objects and loop through key or values 
*/

//Functions
// it is a block of reusable code and it is written to perform a specific task 
//functions can accept inputs known as parameters and when we call the functions the values that are passed are called arguements
//function can also return back the value to the code using the return statement

function greet(name){
    console.log(`Hello ${name}, How are you?`);
}

greet("Karthik");

function sum(a,b){
    return a+b;
} 

let add = sum(5,6);
console.log(add);