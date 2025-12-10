//Prototype Chaining
let grandParent = {
  country: "India"
};

let parent = {
  city: "Hyderabad",
  __proto__: grandParent
};

let child = {
  name: "Karthik",
  __proto__: parent
};

console.log(child.name);     
console.log(child.city);    
console.log(child.country); 

//Classes 

class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("Hello " + this.name);
  }

  walk() {
    console.log(this.name + " is walking");
  }
}
//creating obj using new keyword
const p1 = new Person("Karthik")
p1.sayHello();
p1.walk();