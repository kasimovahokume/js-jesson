// function A() {
//     let age = 25;
//     console.log("Function A",age);
// }
// A()

// function sumCalculator(num1, num2) {
//     let sum = num1 + num2;
//     console.log("Sum is:", sum);
// }

// function multiplyCalculator(num1, num2) {
//     let product = num1 * num2;
//     console.log("Product is:", product);
// }

// sumCalculator(5, 10);
// sumCalculator(20, 30);
// sumCalculator(100, 200);

// multiplyCalculator(5, 10);
// multiplyCalculator(3, 70);
// multiplyCalculator(4, 6);

// function sumCalculator(num1,num2, num3 = 0) {
//     let sum = num1 + num2 + num3;
//     return sum;
// }
// let result = sumCalculator(5, 10,20); 
// console.log( "Result is",result);

// function greetUser(name,balance) {
//     let result = `Hello ${name}, your balance is $${balance}`;
//     return result;
// }

// let message = greetUser("Alice", 2500);
// console.log(message);


// let fruits = ["Apple", "Banana", "Orange", "Mango"];
// let numbers = [10,20,30,40,50];
// let students = ["Alice", "Bob","Charlice","David"];


// for (let i = 0; i < fruits.length; i++) {
//     console.log("Fruits:",fruits[i]);
// }

// function printArrayEl() {
//     for (let i = 0; i < fruits.length; i++) {
//         console.log("Fruit");
        
//     }
// }


// function makeBurger() {
//   console.log("Undu götür");
//   console.log("Kotleti qoy");
//   console.log("Sous elə");
//   console.log("Burger hazır!");
// }

// makeBurger();
// makeBurger();
// makeBurger();

// function countVowels(str) {
//     let vowes = aeiou;
//     let count = 0;
// }


// function praintEven(num) {
//     for (let i = 2; i <= num; i++) {
//        if (i % 2 == 0) {
//         console.log(i);
//        }
        
//     }
// }
// praintEven(10);




function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + "x" + i + "=" + (num*i));
    }
}
multiplicationTable(3);