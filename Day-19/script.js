let a = "javascript"
let b = "javascript"

if(a === b)
    console.log("both strings are equal")
else
    console.log("both strings are not equal")

var num = 9;

if(typeof num === 'number')
    console.log("variable is a number")
else
    console.log("variable is not a number")

console.log(typeof num)

let arr = []

if(arr.length === 0)
    console.log("Array is empty")
else
    console.log("Array is not empty")

//declare an array with your fav cricketers and access the 
// first element in a variable and print it in console

let cricketers = ['kohli','dhoni','rohit'];

let result = cricketers[0]
console.log(result)

let cities = ['Mumbai','Delhi','Hyderabad']
result = cities[2]
console.log(result)

let dosas = ['Masala dosa','Paneer dosa','Ghee Karam dosa']
console.log(dosas)

dosas[2] = 'Rava dosa'
console.log(dosas)

console.log(cities)
cities.push('Chennai')
console.log(cities)

cities.pop()
console.log(cities)