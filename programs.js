// const array = [2,null,undefined,3,null,4,undefined]
// const arr1 = array.filter(element => element != null)
// console.log(arr1);

//print one to n number with set interval 1 sec

// function printNumbers(n) {
//     let currentNumber = 1;

//     const intervalId = setInterval(() => {
//         console.log(currentNumber);
        
//         if (currentNumber >= n) {
//             clearInterval(intervalId);
//         }

//         currentNumber++;
//     }, 1000);
// }

// // Call the function with desired n
// printNumbers(10);

//call back function

// Define a function that takes a callback

// Define a callback function

// function sayGoodbye() {
//     console.log('Goodbye!');
// }


// function greeting(name) { setTimeout(() => {
//      console.log('Hello, ' + name + '!');
// }, 3000);
   
    
// }
// function say(age,callback1){
//     console.log('iam '+ age);
//    callback1()
    
// }

// // Call the greeting function with the callback
// greeting('Alice')

// say('25',sayGoodbye)



// function sum(a,b,callback){setTimeout(() => {
//     console.log(a+b);
   
// }, 3000);
// callback()   
// }

//  function call(){
//     console.log('result is');
//  }

// sum(3,5,call)

// let obj ={
//     name : 'riz',
//     age:{
//         year:{
//             month : 'jan'
//         }
        
//     }
// }
// obj.age.year.month= 'feb'
// console.log(obj.age.year.month);

// this function

// const person = {
//     name: 'Bob',
//     age : 25,
//     showThis: function() {
//         console.log(this);
//     }
// };
// person.showThis(); // Output: person object

//itrator

// const string = 'hello';

// const iterator = string[Symbol.iterator]();

// console.log(iterator.next().value); // { value: 'h', done: false }
// console.log(iterator.next()); // { value: 'e', done: false }
// console.log(iterator.next()); // { value: 'l', done: false }
// console.log(iterator.next()); // { value: 'l', done: false }
// console.log(iterator.next()); // { value: 'o', done: false }
// console.log(iterator.next()); // { value: undefined, done: true }


// let a = 200;
// let b = 10;
  
// function hello(){
// let temp = a
// a = b
// b= temp

// }

// hello()


// let a = 1;
// let b = 2;

// console.log('Before swap:', a, b); // Output: Before swap: 1 2

// [a, b] = [b, a];

// console.log('After swap:', a, b); // Output: After swap: 2 1



