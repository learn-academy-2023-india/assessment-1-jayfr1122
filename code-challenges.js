// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code: Combine both arrays into one array, then return the length of the new array.

// const comboArr = (arr1, arr2) => {
//     let newArr = [arr1 + arr2]
//     return comboArr.length
    
// }
// console.log(comboArr(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns))
// output -- 2
// First attempt with minimal looking up.
// const oneArr = (arr1, arr2) => {
// const newArr = arr1.concat(arr2)
// return newArr.length
// }
// console.log(oneArr(padres1984WorldSeriesRuns,padres1998WorldSeriesRuns))

// output -- 9
// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code: Reverse the order of the letters in the string and return the  new reversed string. I will have to change the string into an array, reverse the order, and then convert back to a string.
// .split("") -- converts a string into an array
// .reverse() -- reverses order of array
// .join("") -- converts all values in an array into a string
// const revCo = currentCohort.split("").reverse().join("")
// console.log(revCo)
// output -- 3202 NRAEL

// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.
const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code: Make a for loop that iterates through the array and will move the odds into a new array.

// const oddOnly = () => {
//     let oddArr = []
//     for(i = 0; i < stockExchange.length; i++){
//     if(stockExchange[i] % 2 !== 0 || stockExchange[i] % 2 === -1)
//     oddArr.push(stockExchange[i])
// }
// return oddArr
// }
// console.log(oddOnly(stockExchange))

// output -- [ 13, 5, -5, 27 ]
