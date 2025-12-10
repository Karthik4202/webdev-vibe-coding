//OOPS
//1.Encapsulation: Data(properties) and Behaviour(methods) are kept inside one class
class BankAccount {
  #balance = 0;   

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(500);
console.log(account.getBalance());  

//console.log(account.#balance); 


//2.Abstraction 
//Abstraction means showing only what is necessary and hide the rest 

class Car {
  start() {
    this.#igniteEngine();
    this.#checkOilPressure();
    this.#startFuelPump();
    console.log("Car started");
  }

  #igniteEngine() {

  }
  #checkOilPressure() { 

  }
  #startFuelPump() { 

  }
}

const car = new Car();
car.start();       
//car.#igniteEngine();   


//3.Inheritance 
//Child class inherits from the parent class using the extends keyword

class Vehicle {
  break() {
    console.log("Vehicle Stopped");
  }
}

class Bike extends Vehicle { 
  horn() {
    console.log("Horn");
  }
}

const activa = new Bike();
activa.break(); 
activa.horn();

//4.Polymorphism
//polymorphism means method overriding, Child class rewriting the parent class method
class Animal {
  sound() {
    console.log("Some sound...");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark!");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow!");
  }
}

const animal = new Animal();
const dog = new Dog();
const cat = new Cat();

animal.sound();  // Some sound...
dog.sound();  // Bark!
cat.sound();  // Meow!
