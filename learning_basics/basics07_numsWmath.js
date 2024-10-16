const score=100
console.log(score)         //output 100

const num=new Number(100)                              //gurantee that the input is number
console.log(num)          //output [Number:100]

console.log(num.toFixed(2)) //100.00   fix the number of digits after decimal

let othernumber=1123.89344
console.log(othernumber.toPrecision(5))             // 1123.9
console.log(othernumber.toPrecision(6))             // 1123.90
console.log(othernumber.toPrecision(3))             // 1.12e+3   decimal se pehle ke liye precision use krna not recommended


const hundered = 1000000000
console.log(hundered.toLocaleString())                  // 1,000,000,000    international system
console.log(hundered.toLocaleString('en-IN'))           // 1,00,00,00,000    national system


/*
  6. Other methods
    .MAX_VALUE
    .MIN_VALUE
    .MAX_SAFE_INTEGER         max safe integer value that can be stored
    .MIN_SAFE_INTEGER         min safe integer value that can be stored 
*/    




//  +++++++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//  Math is a very strong library of javascript

/*
       Methods ----
1. Math.abs() // Converts +ve / -ve integer values to positive
2. Math.round(4.3) // Output - 4
3. Math.round(4.6) // Output - 5
4. Math.ceil(4.2) // Output - 5 (gives top value)
5. Math.floor(4.9) // Output - 4 (gives bottom value)
6. Math.min(4,3,6,8) // Output - 3
7. Math.max(4,3,6,8) // Output - 8
8. Math.random() // Gives random value between 0 & 1 in decimals

Math.random() tricks -----
Math.random()*10
Math.random()*10 + 1 // This assures that values are atleast 1 & more than 1
(Math.random()*10) + 1 // To avoid any BODMAS rule miscalculation

---- Trick to randomize value between range ----
const min = 10
const max = 20
const randomValue = Math.floor((Math.random() * (max - min + 1)) + min)

*/