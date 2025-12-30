// values
// const personal = {
//     name: "John",
//     surname: "Doe",
//     balance: 0,
//     history: "Test",
// }
// const data = Object.values(personal)
// console.log(data);


//keys
// const personal = {
//     name: "John",
//     surname: "Doe",
//     balance: 0,
//     history: "Test",
// }
// const data = Object.keys(personal)
// console.log(data);

//entries
// const personal = {
//     name: "John",
//     surname: "Doe",
//     balance: 0,
//     history: "Test",
// }
// const responce = [['name','John'],['surname','Doe'],['balance',0],['history','Test']]
// const data = Object.entries(personal)
// console.log(data);



// const myObj = {
//     name: "Alice",
//     age: 10,
//     greet: function(){
//         console.log("Hello," + this.name);
//     }
// };
// myObj.greet();

// const myObj = { name: "Alice",
//     age: 10,
//     greet: () =>{ 
//         console.log(`Hello, ${this.name}`);
//      } 
//     }; 
//     myObj.greet()

// let personal2 = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     tutor_exs: 5,
//     work_exs: 8,
//     city: "New York",
//     country: "USA"
// }

// let personal3 = {
//     surname: "Smith",
//     age: 28,
//     tutor_exs: 3,
//     work_exs: 6,
// }

// Object.assign(personal2, personal3)
// console.log(personal2);


//task1
// const numbers = [1, 2, 3, 4, 5];
// const [first,second,...rest] = numbers;
//  console.log(first);
//  console.log(second);
//  console.log(rest);


//task2
// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue"
// };
// const [make, model,year,color] = car

// console.log(make);
// console.log(model);
// console.log(year);
// console.log(color);

// const make = car.make

//task3
// const user = {
//   name: "Tom",
//   age: 25
// };
// const{name,age,country= "Unkown"}= user;
// console.log(name);
// console.log(age);
// console.log(country);


//task4
// const employee = {
//   name: "Sara",
//   age: 32,
//   address: {
//     city: "New York",
//     zipcode: 10001
//   }
// };
// const{address:{city,zipcode}} = employee;
// console.log(city);
// console.log(zipcode);

// const city1 = employee.address.city
// const zipcode1 = employee.address.zipcode

// console.log(city1);
// console.log(zipcode1);

//task5
// const person = {
//   name: "Alice",
//   age: 28
// };
// const{name: username, age: userAge}= person;
// console.log(username);
// console.log(userAge);

//task6
// function Car(brand, model) {
//   this.brand = brand;
//   this.model = model;

  
// }




// let person1 = {
//   name: "Alice",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };

// let person2 = {
//   name: "Bob"
// };

// person1.greet.call(person2);

// let car1 = {
//   brand: "Toyota",
//   describe: function(speed, color) {
//     console.log(`${this.brand} is going ${speed} km/h and it is ${color}`);
//   }
// };

// let car2 = {
//   brand: "Honda"
// };
// car1.describe.apply(car2,[120,"black"]);

// let person = {
//   name: "John",
//   greet: function() {
//     console.log("Hello, " + this.name);
//   }
// };
// let result = person.greet.bind(person);

// result()


// let currentDate = new Date()
// let result = date.getDate()
// console.log(result);

// let specificDate = new Date(2025 , 8 , 20);
// console.log(specificDate);

// function addDays(days) {
//     let date = new Date()
//     date.setDate()
// }