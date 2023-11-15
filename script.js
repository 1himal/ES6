// basicOperations.js

class Profile {
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    showProfile() {
      return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
  }
  
  class Cart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(productName) {
      this.products = this.products.filter(product => product.name !== productName);
    }
  
    getTotalPrice() {
      return this.products.reduce((total, product) => total + product.price, 0);
    }
  }
  
  const convertToCelsius = fahrenheit => (fahrenheit - 32) * (5 / 9);
  const convertToFahrenheit = celsius => (celsius * 9) / 5 + 32;
  
  const sumAll = (...numbers) => numbers.reduce((sum, number) => sum + number, 0);
  
  const splitArray = ([first, second, ...rest]) => ({ first, second, rest });
  
  // advancedOperations.js
  
  const repeatString = (str, n) => `${str.repeat(n)}`;
  
  class Shape {
    constructor() {
      // Shape properties
    }
  
    describe() {
      //Using template literals
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
      // Circle properties
    }
  }
  
  class Square extends Shape {
    constructor(side) {
      super();
      this.side = side;
      // Square properties
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
      // Triangle properties
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  const delayedHello = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Hello");
        resolve();
      }, 2000);
    });
  };
  
  const filterEvens = numbers => numbers.filter(number => number % 2 === 0);
  
  // Application
  
  // Creating a Profile instance
  const userProfile = new Profile('John Doe', 25, 'john.doe@example.com');
  console.log(userProfile.showProfile());
  
  // Creating a Cart instance and adding products
  const shoppingCart = new Cart();
  shoppingCart.addProduct({ name: 'Laptop', price: 1200 });
  shoppingCart.addProduct({ name: 'Headphones', price: 100 });
  console.log('Total Price:', shoppingCart.getTotalPrice());
  
  // Use of sumAll function
  const totalSum = sumAll(10, 20, 30, 40);
  console.log('Total Sum:', totalSum);
  
  // Use of splitArray function
  const { first, second, rest } = splitArray([1, 2, 3, 4, 5]);
  console.log('First:', first, 'Second:', second, 'Rest:', rest);
  
  // converting To Celsius and Fahrenheit functions
  const celsiusValue = 30;
  console.log(`${celsiusValue} Celsius is ${convertToFahrenheit(celsiusValue)} Fahrenheit.`);
  
  // Use the repeatString function inside the Profile class
  console.log(repeatString(userProfile.name, 2));
  
  // Creating shapes and describing them
  const circle = new Circle(5);
  const square = new Square(4);
  const triangle = new Triangle(3, 6);
  
  console.log(circle.describe());
  console.log(square.describe());
  console.log(triangle.describe());
  
  // Use of delayedHello function
  delayedHello().then(() => {
    console.log('Printed after 2 seconds using Promises.');
  });
  
  // Use of filterEvens function
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvens(numbers);
  console.log('Even Numbers:', evenNumbers);
  
