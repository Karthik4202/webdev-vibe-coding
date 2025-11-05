//Day 20 softcopy, hardcopy, arraymethods like concat, includes and whileloop;

let fruits = ['Apple','Banana','Mango','Orange'];

let softcopyOfFruits = fruits;//softcopy

softcopyOfFruits.pop();

console.log(fruits);
console.log(softcopyOfFruits);

let cities = ['Hyderabad','Banglore','Chennai','Delhi'];

let hardcopyOfCities = [...cities];//hardcopy

cities.pop();

console.log(cities);
console.log(hardcopyOfCities);

let states1 = ['Telangana','Andhra pradesh','Tamilnadu'];
let states2 = ['Kerala','Karnataka','Maharashtra','Odisha'];

//Merged Array
let mergedStates = states1.concat(states2);
console.log(mergedStates);

//Includes method 

let result = cities.includes('Hyderabad');
console.log(result);

//Loops

//WhileLoop

//print sum of 1 to 5 numbers using while loop

let sum = 0;
let i = 0;

while(i <= 5){
    sum = sum + i;
    i++;
}
console.log(sum);

//store the values from 1 to 5 in a array

let values = [];
let j = 1;

while(j <= 5){
    values.push(j);
    j++;
}
console.log(values);
