//Loops

//Task1
let num = [1,2,3,4];
let total = 0;
for (let i = 0; i < num.length; i++) {
    total = total + num[i];
}
console.log(total);

//Task2
let num2 = 5;
let factorial = 1;
for (let i = 1; i <= num2; i++) {
     factorial*= i;
}
console.log(factorial);

//Task3
let array = [3, 7, 2, 8, 5];
let arrayMax = array[0];
for (let i = 1; i < array.length; i++) {
    if(array[i] >= arrayMax){
        arrayMax = array[i];
    }
}
console.log(arrayMax);

//Task4
let stringRev = "hello";
let reversed = ""
for (let i = stringRev.length-1; i>= 0; i--) {
    reversed += stringRev[i]
}
console.log(reversed);

//Task5






















// 1: Sum of an Array
// Task: That takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// // Output: 10


// ibrahim
//   8:47 PM
// 2: Factorial of a Number
// Task: that takes a number as an argument and returns its factorial.
// // Output: 120


// ibrahim
//   9:03 PM
// 3: Find the Maximum Number
// Task: that takes an array of numbers as an argument and returns the largest number.
// [3, 7, 2, 8, 5]
// // Output: 8


// Səma
//   9:32 PM
// Task: Write reverseString that takes a string as an argument and returns the string reversed.
// ; // Output: "olleh"


// Səma
//   9:49 PM
// Task: Write a isPrime that takes a number as an argument and returns true if the number is a prime number, otherwise returns false.
// // Output: true
//  // Output: false