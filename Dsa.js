//  FUNCTIONS AND IF-ELSE STATEMENTS

// function greet () {
//     console.log("Hello, DSA!");
// }

// greet();  // Calling/invoking the function to see the output

// function greet(name){
//      console.log("Hello," + name + "!");
// }

// greet("DSA");  // Calling the function with an argument
// greet("Alice");  // Calling the function with another argument

// function greet (name) {
//      console.log("Hello, " + name + "!");
// }

// let name = "Prasann Tripathi"
// greet(name);  // Calling the function with a variable

// function sum(a, b){
//      return a + b;  // Returns the sum of a and b
// }
// let result = sum(5, 10);  // Calling the function and storing the result
// console.log(result);  // Output: 15

// function sum (a,b){
//      let add = a + b;
//      console.log("The sum is: " + add);  // Output the sum
// }
// sum(5, 10);  // Calling the function with two numbers

// function multiply(a,b){
//      let product = a * b;
//      return product;  // Returns the product of a and b
// }
// let result = multiply(5, 10);  // Calling the function and storing the result
// console.log("The product is: " + result);  // Output: The product is:

// function EligibleForVoting(age){
//      if(age >= 18){
//           console.log("You are eligible for voting.");
//      }else{
//           console.log("You are not eligible for voting.");
//           }
// }
// EligibleForVoting(10);  // Calling the function with an age that meets the condition

// function EligibleForVoting(age){
//      if(age < 0){
//           console.log("Age cannot be negative.");
//      }else if(age >= 18){
//           console.log("You are eligible for voting.");}else{
//           console.log("You are not eligible for voting.");}
// }
// EligibleForVoting(-2);  // Calling the function with an age that does not meet the condition

// function checkEvenOdd(number){
//      if(number % 2 === 0){
//           console.log(number + " is an even number.");
//      }else{
//           console.log(number + " is an odd number.");
//           }
// }

// checkEvenOdd(10);  // Calling the function with an even number

// ***********************  2ND DAY PRACTICE ******************************

//LOOPS AND ITERATIONS

//    for(let i = 0; i< 8; i++){
//      console.log("Iteration number: " + i);
//    }

//    for(let i = 0; i <=4; i++){
//      console.log("Current number: " + i);
//    }

// for (let i = 2; i < 9; i = i + 2) {
//   console.log("Hello, DSA! " + i);
// }

// for(let i = 5;  i > 0; i--){
//      console.log("Hello, DSA! " + i);
// }

// for(let i  = 5; i < 4; i++){
//      console.log("Hello, DSA! " + i);
// } // This loop will not execute because the condition is false from the start

// for(let i = 1; i > 0; i++){
//      console.log("Hello, DSA! " + i);
// } // This loop will run indefinitely because the condition is always true

// function greet(i) {
//   console.log("Hello, DSA!" + i);
// }
// for (let i = 0; i < 12; i++) {
//   greet(i);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++){
//      console.log("Element at index " + i + ": " + arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 1) {
//     console.log("Odd number: " + arr[i]);
//   }
// }

// ************************      3RD DAY PRACTICE      ************************

// let i = 0;
// while (i < 6) {
//   console.log("Hello, DSA! " + i);
//   i++;
// }

// let i = 0;
// while (i < 6) {
//   if (i % 2 === 0) {
//     console.log("Even number: " + i);
//   } else {
//     console.log("Odd number: " + i);
//   }
//   i++;
// }

// let i = 0;
// let age = 20;
// while(i < 6) {
//   if (age >= 18) {
//     console.log("You are eligible for voting.");
//   } else {
//     console.log("You are not eligible for voting.");
//   }
//   i++;
// }

//CHECK THE POSTIVE OR NEGATIVE NUMBER

// function checkNUmber(num) {
//     if (num > 0) {
//         console.log("Postive NUmber" + num)
//     } else {
//         console.log("Negative Number" + num)
//     }
// }

//  checkNUmber(-10)

// WRITE A  FUNCTION THAT SEARCHES FOR AN ELEMENT IN AN ARRAY AND RETURNS ITS INDEX IF FOUND, OR -1 IF NOT FOUND

// function searchelement (arr, element){
//   for (let i = 0; i < arr.length; i++){
//     if(arr[i] === element){
//       return i
//     }
//   }
//   return -1
// }
//  let arr = [3,6,8,20,40,50];
// let result = searchelement(arr,60)
// console.log(result);

//  WRITE A FUNCTION THAT RETURNS THE NUMBER OF NEGETIVES NUMBERS IN AN ARRAY

// function countNegatives(arr){
//   let count = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//       count++
//     }
//   }
//   return count
// }
//  let arr = [3, -6, 8, -20, 40, -50];
// let result = countNegatives(arr);
// console.log("Number of negative numbers: " + result);

//***********************   4th DAY PRACTICE  ****************** */

// ******  PROBLEM - WRITE A FUNCTION THAT RETURN A LARGEST NUMBER OF AN ARRAY *********

// function findlargestnumber(arr) {
//     let largest = null
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest) {
//         largest = arr[i]
//       }
//     }
//     return largest
// }

// let arr = [2, 5, 20, 3, 32, 10,45]

// let result = findlargestnumber(arr)

// console.log(result)

// function findlargest(arr) {
//     let largest = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// let arr = [-3, -4, -2, -5]
// let result = findlargest(arr)
// console.log(result)

// function findlargestnumber(arr) {
//     let largest = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest;
// }

// let arr = [3, 5, -3, 6, 8]
// let result = findlargestnumber(arr)
// console.log(result)


// *********** PROBLEM - WRITE A FUNCTION THAT RETURNS THE SMALLEST NUMBER OF AN ARRAY *********

// function findsmallestnumber(arr) {
//     let smallest = Infinity
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < smallest) {
//             smallest = arr[i]
//         }
//     }
//     return smallest
// }

// let arr = [1, 2, 3, 4, 5]
// let result = findsmallestnumber(arr)
// console.log(result)


// ************ ABOUT THE INFINITY AND -INFINITY *************
// In JavaScript, Infinity and -Infinity are special numeric values that represent numbers beyond the upper and lower limits of what JavaScript can represent.

// Infinity represents a value that is larger than any finite number, while -Infinity represents a value that is smaller than any finite number. They are often used in mathematical calculations and comparisons.