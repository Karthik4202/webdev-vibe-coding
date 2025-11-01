let a;

console.log(a);
console.log(typeof a);//something should be defined but not defined : undefined

let b = null;//null is a empty value . 

console.log(b);
console.log(typeof b);//typeof null is object

let num1 = 25;
let num2 = '25';

console.log(num1 == num2);//value comparision
console.log(num1 === num2);//strictly comparision including the type

let user = {
    name : 'karthik',
    age : 23,
    city : 'Hyderabad'
}
console.log(user.name);
console.log(user);

const user2 = {
    name : 'Ajay',
    age : 24,
    city : 'Chennai'
}

console.log(user2.city);
console.log(user2);

user2.city = 'Vizag';//memory is same but the values changes as object is mutable

console.log(user2.city);
console.log(user2)

console.log(typeof user);

let fruits = ['Apple','Mango','Banana']
console.log(fruits[0]);
console.log(fruits);

console.log(fruits[4]);//accessing the value that is not present 