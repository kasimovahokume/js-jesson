//SPREAD
// let numbers = [1,2,3];
// let numbers2 = [12,15,17];
// let result = numbers2.concat(numbers)
// console.log(result);
// let arr = [...numbers2,...numbers]
// console.log(arr);

// REST
// function sum(...arr) {
//     console.log("arr",arr);

//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }
// let result = sum(1,2,34,5,6,54,32,33)
// console.log("result",result);

//CLOSUER
// function suSaygaci() {
//     let sayi = 0
//     let qaliq = 10

//     function arttir() {
//         sayi = sayi + 1
//         qaliq = qaliq + 5
//         console.log("su saygaci:",sayi);
//     }
//     return arttir
// }
// let malikSusaygaci = suSaygaci()
// malikSusaygaci() 


// Task1
// function greet(name) {
//     return function () {
//         console.log("hello,"+ name);
//     }
// }
// const sayHello = greet ('hokume');
// sayHello();

//Task2
// function createCounter() {
//     let count = 0;
//     return () => {
//        return count++;
//     };
// }
// const counter = createCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

//Task3
// function createAccount(initialBalance) {
    
// }
// const myAccount = createAccount(100);
// myAccount.deposit(50);
// myAccount.withdraw(30);
// console.log(myAccount.getBalance());

//Task4

// function (params) {
    
// }

// const programingInstructor = {
//     age: 20,
//     name:"Hokume", 
//     surname:"Kasumova",
//     students:1,
//     work_exs:2,


//     talkLessons: function () {
//         console.log("lessons...");
//     },

//     preparwServerApp:function (yourAppName) {
//         console.log("prepare...",yourAppName);
//     }
// }

// const myCar = {
//     name:"Your car name",
//     brand:"Your car brand",
//     is_new:false,
//     speed:0,
//     year: null,

//     fill:function(carName,carBrand,carYear) {
//      this.name = carName
//      this.brand = carBrand
//      this.year = carYear
     
//      return {...this}
//     },

//     start:function(){

//         let randomNum = Math.random() * 100
//         this.speed += randomNum

//         this.monitoring()
//         return randomNum
//     },

//     stop:function() {
//         console.log("Stop",this.speed);
//     },

//     monitoring:function(){
//         console.log("======================");
//         console.log(this.name);
//         console.log(this.speed);
//         console.log("======================");
//     }
// }

// const teslaCar = myCar.fill("Tesla","094",2021)
// const changanCar = myCar.fill("changan","Q07",2021)

// console.log("teslaCar",teslaCar);
// console.log("changanCar",changanCar);



// myCar.monitoring()

// myCar.start()
// myCar.start()
// myCar.start()
// myCar.start()
// myCar.start()

















// myCar.stop()
// myCar.stop()
// myCar.stop()
// myCar.stop()
// myCar.stop()
// myCar.year = 2020

// myCar.monitoring = function(){
//     console.log("Monitoring...");
// }

// console.log("myCar",myCar);

// let randomNum = Math.random()

// console.log(randomNum);



// const myCar = {
//     make:" Infiniti",
//     model:"G35",
//     year: 2008,

//     getAge:funtion(){
//         console.log(2025- this.year)
//     },
//     getInfo
// }

// const cars = [
//     {
//     make:" Infiniti",
//     model:"G35",
//     year: 2008,
//     },
//     {
//     make:" subaru",
//     model:"inpreza",
//     year: 2006,
//     },
//     {
//     make:" toyota",
//     model:"mark2ii",
//     year: 2009,
//     },
//     {
//     make:" Nissan",
//     model:"Laura",
//     year: 2005,
//     }
// ];
// const ncars = cars.filter(car=> car.year>2025)
// console.log("ncars",ncars);

// const carNames cars.map

// const person = {
//     name:"Hokuma",
//     age: 20,
//     adresss
// }

