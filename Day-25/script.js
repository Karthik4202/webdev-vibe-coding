let arr = [2,4,1,7,4,12,53,8,22,56,33,12,5,27];

//filter is a function that filters the array based on the condition and returns the new array

let filteredArray = arr.filter((value)=>{
    return value > 15;//filters the values greater than 15
})
console.log(filteredArray);

//reduce is a function that reduce the array into a single value

let reducedValue = arr.reduce((accumulator,value)=>{
    return accumulator+value;
},0)

console.log(reducedValue);
//factorial program using reduce 
function factorial(n){
    if(n < 0){
        return "Factorial is not possible for negative numbers";
    } else {
        return Array.from(Array(n+1).keys()).slice(1).reduce((acc,value)=>{
            return acc*value;
        },1) 
    }
}

console.log(factorial(0),factorial(-1));

let duplicate = [5,3,4,1,4,2,1,7,6,4,6,3,2];
//to remove the duplicates from the array 

let noDuplicates =[... new Set(duplicate)];
console.log(noDuplicates);

//to sort this array 
let sortedArray = noDuplicates.sort((a,b)=>{
    return a - b;//ascending , for descending do b-a
})
console.log(sortedArray);