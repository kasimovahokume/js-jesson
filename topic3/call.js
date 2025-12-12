// //Calbacks
// function A(){
//     let pi = 3.14;
//     return pi;
// }
// // A()

// function calc(num){
//     let resultA = A();
//     console.log("Result A is:", resultA * num);
// }

// calc(10)

// function catchMinNumber(numbers) {
//     let prewNum = numbers[0];
//     for (let i = 1; i<numbers.length; i++){
//         let currentNum = numbers[i];
//         if{

//         }
//     }
// }

// function calcProses(num,arr) {
//     let minNumber = catchMinNumber(arr);
//     let result = num * minNumber;
//     console.log("Result is:",result);
// }
// let list = [15,3,9,27,1,8,12]
// calcProses(10, list);


// function A() {
//     console.log("Function A is called");
//     return "Horrray!";
// }
// console.log(A()); 


// function performOperation(num1, num2, operationCallback){

//     let a = 10;
//     let netice = operationCallback(num1, num2, a);

//     console.log("Result of the operation is:", netice);
// }
//  function add(a,b,c) {
//     let result = a + b + c;
//     return result;
//   }


// performOperation(10,5,add);


// function kofeAparati(coffeType, clTerezi){
//     const hazirlamaVaxti =  20

//     const result = clTerezi(coffeType, hazirlamaVaxti);
//     console.log(`${adet} kofe hazirlanir...`);
// }

// function kofeAparati(coffeeType, clTerezi){

//     const hazirlamaVaxti = 20

//     const result = clTerezi(coffeeType, hazirlamaVaxti);

//     console.log("Sifarisiniz hazirdir:", result);

// }

// function terezi(coffeeType, hazirlamaVaxti){
//     return `${coffeeType} kofesi, ${hazirlamaVaxti} saniyeye hazirlanir.`
// }

// function terezi2(coffeeType, hazirlamaVaxti){
//     return `${coffeeType} kofesi, ${hazirlamaVaxti + 10} saniyeye hazirlanir.`
// }

// function terezi3(coffeeType, hazirlamaVaxti){
//     return `${coffeeType} kofesi, ${hazirlamaVaxti + 5} saniyeye hazirlanir.`
// }

// kofeAparati("Espresso", terezi);
// kofeAparati("Latte", terezi2);
// kofeAparati("Cappuccino", terezi3);








































































// function filterArray(arr, callback) {
//     let result = [];

//     for (let item of arr) {
//         if (callback(item)) {
//             result.push(item);
//         }
//     }

//     return result;
// }

// let numbers = [1, 2, 3, 4, 5];

// let onlyEven = filterArray(numbers, function(n) {
//     return n % 2 === 0;
// });

// console.log(onlyEven); // [2, 4]
