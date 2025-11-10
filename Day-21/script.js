//dowhile loop here the logic inside the loop first then the condition is checked.
//it is also called exit controlled loop
let sum = 0;
let i = 1;
do{
    sum += i;
    i++;
} while(i <= 5)

console.log(sum);

//for loop 
/*
for(declaration; condition; increment or decrement){
    instrucitons;
}
while loops and forloops are called entry controlled loops
*/
let total = 0;

for(let j = 1; j <= 10; j++){
    total += j;
}
console.log(total);

//there is an array of numbers multiply them by 2 and store the result in new array using forloop
let a = [1,2,3,4,5];

let resultArray = [];

for(let k = 0; k < a.length; k++){
    resultArray.push(a[k]*2);
}
console.log(resultArray);

let number;

console.log(typeof number);//undefined
console.log(number*1);//Any arithmetic operation involving undefined gives NaN as the result.
