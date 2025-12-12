// function A() {
//     let age = 25;
//     console.log("Function A",age);
// }
// A()

// const { useReducer } = require("react");

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




// function multiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(num + "x" + i + "=" + (num*i));
//     }
// }
// multiplicationTable(3);


//Parametrli bu 1 parametrden istifade etdi
// function greet(userName){
//     console.log("salam " + userName);
// }
// greet("Alisa");
// greet("Aliso");
// greet("Nur");

// 2 parametrden is.etdi
// function calculateNumbers(a,b){
//     let c = a + b;
//     console.log(c);
// }
// calculateNumbers(5, 10);


//indi belede ola bilerki (a=10, b=20) bu yazilis o demekdiki bu parametrlerin deyerleri funksiya cagirildiqi zaman verilmiyibse,default olaraq bunu qebul et.mes;
//  function calculateNumbers(a = 10, b = 20){
//     let c = a + b;
//     console.log(c);
//  }
//  calculateNumbers(12, 21);
//  calculateNumbers();


//Return
// function calculateNumbers(a){
//     let res = a *a*a;
//     return res;
// }
// let res = calculateNumbers(2)

// console.log(res);

//FUNKSIYA CHATGPT TAPSIRIQLARI
//1-ci
//bu menim yazdiqimdi
// function sumNumbers(num1, num2) {
//     let sum = num1 + num2;
//     console.log(sum);
// }
// sumNumbers(5, 7);
// sumNumbers(10, 3);
//===================================
//buda chatin yazdiqi optimal versiya
// function sumNumbers(num1, num2){
//     return num1 + num2;
// }
// console.log(sumNumbers(5, 7));
// console.log(sumNumbers(10, 3));

//================================================
//2-ci
// function wordLength(word) {
//     return word.length;
// }
// console.log(wordLength("javascript"));
// console.log(wordLength("Hökümə")); 
//======================================
//3-cu
// function maxNumber(a, b) {
//     if (a>b) {
//         return a;
//     }else{
//         return b;
//     }
// }
// console.log(maxNumber(5, 7));
// console.log(maxNumber(10, 3));

//4-cu
//===================================
// function sumArray(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         total = total + array[i];
//     }
//     return total;
// }

// console.log(sumArray([1, 2, 3, 4])); // 10
// console.log(sumArray([5, 10, 15]));  // 30
//===========================================================












//Task: Write a function countVowels that takes a string as an argument and returns the number of vowels in the string.
//console.log(countVowels("javascript")); // Output: 3





//===========================================================

// function greet(userName) {
//     console.log("Salam "+ userName);
// }

// greet("Alica")

//ic ice funksiya
// function calculateNumbers(a,b) {
//     let c = a*b;
//     return c;
// }

// console.log(calculateNumbers(2, 3));


// let colors = ["red","yellow", "brown","pink"];
// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }






