// //Loops

// //Task1
// let num = [1,2,3,4];
// let total = 0;
// for (let i = 0; i < num.length; i++) {
//     total = total + num[i];
// }
// console.log(total);

// //Task2
// let num2 = 5;
// let factorial = 1;
// for (let i = 1; i <= num2; i++) {
//      factorial*= i;
// }
// console.log(factorial);

// //Task3
// let array = [3, 7, 2, 8, 5];
// let arrayMax = array[0];
// for (let i = 1; i < array.length; i++) {
//     if(array[i] >= arrayMax){
//         arrayMax = array[i];
//     }
// }
// console.log(arrayMax);

// //Task4
// let stringRev = "hello";
// let reversed = ""
// for (let i = stringRev.length-1; i>= 0; i--) {
//     reversed += stringRev[i]
// }
// console.log(reversed);

// //Task5





//for tapsiriqlar
//1-ci sade 
//  for(let i = 1; i<=10; i++){
//     console.log(i);
//  }

//2-ci 1 den 10 a qeder cutleri yaz
// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);
    
// }
// for (let i = 1; i <= 10; i++) {
//     if (i%2==1) {
//         console.log("hoku");
//     } else {
//         console.log("salam");
//     }
    
// }

//50 den 1 e qeder gedek ve total tapaq.
// let total = 0;
// for(let i=50; i>=1 ;i--){
//     total+=i
//     console.log(i);
// } 
// console.log("Toplam :", total);

//WHILE
//1-ci sade 
// let sayac = 1;
// while(sayac<=10){
//     console.log(sayac);
//     sayac++;
// }

//do while
// let sayac =1;

// do {
//     console.log(sayac);
//     sayac++
// } while (true);

//=======================================================
// let array = []
// for(let i = 0; i <= 100; i++){
//     if(i %5 === 0){
//         console.log("Iteration number:", i);
//         array.push(i);
//     }
// }
// console.log(array);

// for(let count = 0; count < 10; count++){
//     for(let innerCount = 0; innerCount<10; innerCount++){
//         console.log("count", count);
//         console.log("Innercount", innerCount);
//     }
// }
//break
// let fruits = ["Apple","Banana","Mango"];
// for(let i = 0; i < fruits.length; i++){
//     let el = fruits[i];
//     console.log("el",el);

//     if(el == "Banana"){
//         break
//     }
// }


// let fruits = ["Apple","Banana","Mango"];
// for(let i = 0; i < fruits.length; i++){
//     let el = fruits[i];
//     console.log("el",el);

//     if(el == "Banana"){
//         break
//     }
// }


// let fruits = ["Apple","Banana","Mango","Orange","Pineapple","Grapes","Strawberry","Watermelon"];
// let newFruits = [];
// for(let i = 0; i < fruits.length; i++){
//     let el = fruits[i];

//     if(el.includes("e")){
//         console.log("You have",el);
//     }
// } 




// let fruits = ["Apple","Banana","Mango","Orange"];
//     for (let i = 0; i < fruits.length; i++) {
//         let el = fruits[i];
//         console.log(el);
//     }


//for
// let array = []
// for(let count = 0; count < 100; count++){
//     if(count % 5 === 0){
//         console.log("Iteration number:", count);
//         array.push(count);
//     }
// }
// console.log(array);

// for(let count = 0; count < 10 ; count++){

//     for (let innerCount = 0; innerCount < 10; innerCount++) { 
//             console.log("count",count); 
//             console.log("innercount",innerCount);  
//     }
// }

//while
// let students = ["John","Alice","Bob"];

// let i = 0;
// while(i < students.length){

//     let student = students[i];

//     console.log("studen name:",student);

//     i++
// }

//task1 chat
// for (let i = 1; i <= 5; i++) {
//     console.log(i);
    
// }
// let total = "hello"
// for (let i = 0; i < total.length; i++) {
//     console.log(total[i]);
// }

// let students = ["john","bob","pisik","it","hoku"];
// let i = 0;
// for (const element of students) {
//     console.log("students name:" ,element);
// }

// for (let index in students) {
//     let el = students[index];
//     console.log("Student Name:",el);
    
// }