// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: Console log prints the requested code. The print that was requested was our declared variable cohort's length of data.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: "o"
// a) Correct answer : o
// b) Verify and explain: The print that was requested was the data that was in the 4th indices of our declared varible greeting. I incorrectly put "o" thinking that it would output a string version.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The print that was requested was the data that was in the declared variable language. The requested used another declared varible index. The variable index was given a value of  which then requested the 1st index of language.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: ["SATURDAY", "SUNDAY"]
// b) Verify and explain: The requested print was the declared variable weekendDays and the request wanted the data in the array to be in all upper case. .toUpperCase cannot be applied to a whole array; however, if a for loop was created and each indices was iterated through, had .toUppeCase applied, pushed to a new array, and the new array was then console.log()'ed, the requested data would then be provided.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: This would throw an error.
// a) Correct answer: number
// b) Verify and explain: I incorrectly thought that typeof was not correctly syntaxed. After running the code number was printed. .length will provide a number variable. typeof will define the dataype as a string. typeof evaluated the .length of our declared variable, which is 4, as a number datatype and printed number.
