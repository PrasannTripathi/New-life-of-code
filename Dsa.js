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


// ******************    5TH DAY PRACTICE    ******************

// function findsecondlargest(arr) {
//     let firstlargest = -Infinity;
//     let secondlargest = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > firstlargest) {
//             secondlargest = firstlargest
//             firstlargest = arr[i]
//         } else if (arr[i] > secondlargest) {
//             secondlargest = arr[i]
//         }
//     }
// return secondlargest
// }

// let arr = [4, 6, 10, 22, 32, 34]
// let result = findsecondlargest(arr)
// console.log(result)

// ******** CORNER CASE -1 = IF ARRAY IS EMPTY  ****************

// function findsecondlargest(arr) {
//     if (arr.length < 2) return null
//     let firstlargestnumber = -Infinity;
//     let secondlargestnumber = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > firstlargestnumber) {
//             secondlargestnumber = firstlargestnumber
//             firstlargestnumber = arr[i]
//         } else if (arr[i] > secondlargestnumber && arr[i] !== firstlargestnumber) {
//             secondlargestnumber = arr[i]
//         }
//     }
//     return secondlargestnumber
// }

// let arr = []
// let result = findsecondlargest(arr)
// console.log(result)


// ************* CORNER CASE -2 = IF ARRAY HAS DUPLICATE ELEMENT ********

// function findsecondlargest(arr) {
//     if (arr.length < 2) return null
//     let firstlargestnumber = -Infinity;
//     let secondlargestnumber = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > firstlargestnumber) {
//             secondlargestnumber = firstlargestnumber
//             firstlargestnumber = arr[i]
//         } else if (arr[i] > secondlargestnumber && arr[i] !== firstlargestnumber) {
//             secondlargestnumber = arr[i]
//         }
//     }
//     return secondlargestnumber
// }

// let arr = [10, 20, 8, 20, 5, 4]
// let result = findsecondlargest(arr)
// console.log(result)

// ************* CORNER CASE -3 = IF ARRAY HAS NEGATIVE ELEMENT   ***********

// function findsecondlargest(arr) {
//     if (arr.length < 2) return null
//     let firstlargestnumber = -Infinity;
//     let secondlargestnumber = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > firstlargestnumber) {
//             secondlargestnumber = firstlargestnumber
//             firstlargestnumber = arr[i]
//         } else if (arr[i] > secondlargestnumber && arr[i] !== firstlargestnumber) {
//             secondlargestnumber = arr[i]
//         }
//     }
//     return secondlargestnumber
// }

// let arr = [10, -20, -8, -20, -5, -4]
// let result = findsecondlargest(arr)
// console.log(result)

// ********* LOOP WITH IN A LOOP ***************


// for (let i = 0; i < 5; i++){
//     for (let j = 0; j < 5; j++){
//         console.log("loop in loop" )
//     }
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         console.log(`i = ${i}, j = ${j}`)
//     }
// }

// ***************  6TH DAY PRACTICE  ******************

// for (let i = 0; i < 5; i++){
//     for (let j = 0; j <= i; j++){
//         console.log(`i = ${i}, j = ${j}`)
//     }
// }

// for (let i = 0; i < 5; i++){
//     for (let j = i; j > 0; j--){
//         console.log(`i = ${i}, j = ${j}`)
//     }
// }

// for (let i = 0; i < 3; i++){
//     for (let j = i; j > 0; j--){
//         console.log(`i = ${i}, j = ${j}`)
//     }
// }

// for (let i = 5; i > 0; i--){
//     for (let j = 0; j < i; j++){
//         console.log(`i = ${i}, j = ${j}`)
//     }
// }


// **********     STAR PATTERN    *************************************

// let n = 5
// for (let i = 0; i < n; i++){
//     let row = ""
//     for (let j = 0; j < n; j++){
//         row = row + " * "
//     }
//     console.log(row)
// }


// let n = 4;
// for (let i = 0; i<n; i++) {
//     let row = "";
//     for (let j = 0; j < i + 1; j++){
//         row = row + " * "
//     }
//     console.log(row)
// }

// let n = 4;
// for (let i = 0; i<n; i++) {
//     let row = "";
//     for (let j = 0; j <= i ; j++){
//         row = row + " * "
//     }
//     console.log(row)
// }


// let n = 4;
// for (let i = 0; i<n; i++) {
//     let row = "";
//     for (let j = 0; j <= i ; j++){
//         row = row + (j + 1)
//     }
//     console.log(row)
// }


// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j <= i; j++) {
//         row = row + (i + 1)
//     }
//     console.log(row)
// }


// let n = 4;
// for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row = row + (i)
//     }
//     console.log(row)
// }


// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n-i; j++) {
//         row = row + (j + 1)
//     }
//     console.log(row)
// }

// let n = 4;
// for (let i = 0; i < n; i++) {
//     let row = "";
//     for (let j = 0; j < n-i; j++) {
//         row = row + " * "
//     }
//     console.log(row)
// }


// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = ""
//     for (let j = 0; j < n - (i + 1); j++){
//         row = row + " "
//     }
//     for (let k = 0; k < (i + 1); k++){
//         row = row + '*'
//     }
//     console.log(row)
// }


// ****** 7TH DAY PRACTICE  ************

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = "";
//     let toggle = 1
//     for (let j = 0; j <= i; j++){
//         row = row + toggle
//         if (toggle === 0) {
//             toggle = 1
//         } else {
//             toggle  = 0
//         }
//     }
//     console.log(row)
// }


// let n = 5;
// let toggle = 1
// for (let i = 0; i < n; i++){
//     let row = "";
//     for (let j = 0; j <= i; j++){
//         row = row + toggle
//         if (toggle === 0) {
//             toggle = 1
//         } else {
//             toggle  = 0
//         }
//     }
//     console.log(row)
// }


// **** PROB = WRITE A FUNCTION THAT RETUN A COUNTS OF DIGITS  IN NUMBER *****


// function countsdigits(n) {
//     let count = ""
//     while (n > 0) {
//         n = Math.floor(n / 10)
//         count++
//     }
//     return count;
// }

// let num = 34594;
// let result = countsdigits(num)
// console.log(result)

// ***** CORNER CASE - 1 = IF NUMBER IS NEGATIVE  **********

// function countsdigits(n) {
//     n = Math.abs(n)
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10)
//         count++
//     }
//     return count;
// }

// let num = -34594;
// let result = countsdigits(num)
// console.log(result)

// ******* CORNER CASE -2 = IF NUMBER IS 0  **************

// function countsdigits(n) {
//     if(n === 0) return 1
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10)
//         count++
//     }
//     return count;
// }

// let num = 0;
// let result = countsdigits(num)
// console.log(result)

// *************** 8TH DAY PRACTICE  ******************

// ***********   ABOUT TIME COMPLEXITY & SPACE COMPELXITY   ***********

// IT IS USED TO MEASURE THE EFFICIENCY OF ALGORITHAM IN TERMS OF SPEED, AS THE INPUT SIZE GROWS

// TIME COMPLEXITY  IS NOT EQUAL TO TIME TAKEN

// ************     LINEAR SEARCH *******************

// LINEAR SEARCH = SEQUENTIAL SEARCH

// It checks each element in the list one by one until it finds the target element or reaches the end of the list.

// Algorithm (Steps):

//      1. Start from the first element.
//      2. Compare it with the target element.
//      3. If found, return the index.
//      4. If not, move to the next element.
//      5. Repeat until the element is found or the array ends.


// Time Complexity:
//    1. Best case: O(1) → If the target is the first element.
//    2.Worst case: O(n) → If the target is last element or not present.


// ********** PROB =  REMOVE DUPLICATE FROM SHORTED ARRAY  ******************


// function removeduplicates(nums) {
//     let k = 0
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] > nums[k]) {
//             k = k + 1;
//             nums[k] =  nums[i]
//     }
//     }
//   return  k + 1
// }

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// let result = removeduplicates(nums)
// console.log(result)


// *************** 9TH DAY PRACTICE  ******************

          //  **************** Revise ********

// function greet(name) {
// console.log("Happy Ganesh Chatruthi " + name)
// }
// let n = "Prasann"
// greet(n)


// function addnumber(a, b) {
//     let add = a + b
//     console.log(add)
// }

// addnumber(2,8)


// function addnumber(a, b) {
//     let add = a + b
//     console.log(add)
// }
// let x = 20;
// let y = 30;
// let z = 40
// addnumber(x, y)
// addnumber(x, z)


// function square(a) {
//     let sq = a * a
//     return sq
// }

// console.log(square(35))

// function checkeligibility(age){
//     if (age >= 18) {
//     console.log("You are eligible")
//     } else {
//     console.log("You are not eligible")
//  }
// }

// checkeligibility(17)


// function checkEvenOdd(num) {
//     let rem = num % 2
//     if (rem === 0) {
//         console.log(num + " Even NUmber")
//     }
//     else {
//         console.log(num + " Odd NUmber")
//     }
// }

// checkEvenOdd(97)

// let n = 10;
// for (let i = 0; i < n; i++){
//     console.log("Happy Ganesh chaturthi")
// }

// for (let i = 2; i < 9; i= i + 2){
//     console.log(`Ganesh  ${i}`)
// }


// for (let i = 5; i > 0; i--){
//     console.log(`Ganesh  ${i}`)

// }


// function greet() {
//     console.log("Happy Ganesh Chatruthi")
// }
// for (let i = 0; i < 8; i++){
//     greet()
// }


// let arr = [2, 3, 4, 5, 6, 7, 8]

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// PRINTS THE ALL EVEN NUMBER IN THE ARRAY

// let arr = [2, 3, 4, 5, 6, 7, 8]
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         console.log(` ${arr[i]} = Even Number`)
//     }
// }


// function searchElement(arr, element) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === element) {
//             return i
//         }
//     }
//     return -1
// }

// let arr = [5, 8, 7, 20, 25]
// let result = searchElement(arr, 25)
// console.log(result)

// function countNegativesNumber(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] < 0) {
//             count++
//         }
//     }
//     return count;
// }

// let array = [2, -3, 6, -8]
// let result = countNegativesNumber(array)
// console.log(result)


// function largestNumber(arr) {
//     let largest = -Infinity
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > largest) {
//             largest = arr[i]
//         }
//     }
//     return largest;
// }

// let arr = [5, 12, 20, 28, 54, 22]
// let result = largestNumber(arr)
// console.log(result)


// ************* 10th day practice  ****************************


// ********************  Revise    ***********************
// function findSecondLargest(arr) {
//     let firstLargest = -Infinity
//     let secondLargest = -Infinity
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest
//             firstLargest = arr[i]
//         }
//         else if (arr[i] > secondLargest) {
//             secondLargest = arr[i]
//         }
//     }
//        return secondLargest
// }

// let arr = [4, 5, 10, 14, 18]
// let result = findSecondLargest(arr)
// console.log(result)

// ******** if array has duplicate ******************

// function findSecondLargest(arr) {
//     let firstLargest = -Infinity
//     let secondLargest = -Infinity
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest
//             firstLargest = arr[i]
//         }
//         else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//             secondLargest = arr[i]
//         }
//     }
//        return secondLargest
// }

// let arr = [4, 5, 10, 14, 8, 14]
// let result = findSecondLargest(arr)
// console.log(result)


// for (let i = 0; i < 4; i++){
//     for (let j = 0; j < 4; j++){
//         console.log("Happy Ganesha")
//     }
// }

// for (let i = 0; i < 4; i++){
//     for (let j = 0; j < 4; j++){
//         console.log(` i = ${i}, j = ${j}`)
//     }
// }

// for (let i = 0; i < 4; i++){
//     for (let j = 0; j <= i; j++){
//         console.log(` i = ${i}, j = ${j}`)
//     }
// }

// for (let i = 0; i < 5; i++){
//     let row = ""
//     for (let j = 0; j < i +1; j++){
//         row = row + " * "
//     }
//     console.log(row)
// }

// for (let i = 0; i < 5; i++){
//     let row = ""
//     for (let j = 0; j < i +1; j++){
//         row = row + (j + 1)
//     }
//     console.log(row)
// }

// for (let i = 0; i < 5; i++){
//     let row = ""
//     for (let j = 0; j < i +1; j++){
//         row = row + (i + 1)
//     }
//     console.log(row)
// }


// for (let i = 4; i > 0; i--){
//     let row = ""
//     for (let j = 0; j <= i; j++){
//         row = row + (j + 1)
//     }
//     console.log(row)
// }


// for (let i = 0; i < 5; i++){
//     let row = ""
//     for (let j = 0; j < 5 -(i +1); j++){
//         row = row + " "
//     }
//     for (let k = 0; k <= i; k++){
//         row = row + "*"
//     }

//     console.log(row)
// }

// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = ""
//     let toggle = 1
//     for (let j = 0; j < i; j++){
//         row = row + toggle
//         if (toggle === 0) {
//             toggle = 1
//         }
//         else {
//             toggle = 0
//         }
//     }
//     console.log(row)
// }



