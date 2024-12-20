// curly braces with any function or if else is known as scope . the scope of that program . object ka curly braces scope nhi hota

let a = 747       // yha a , b ,c ka global scope h
const b =647
var c =4679


if(true){
    // console.log(a) error dega local scope mai a ki value initialize ho rkhi h or hm global scope se bhi mang rhe h value
    let a = 30      // a,b ,c in loval scope
    const b =50
    var c =100     // var ki local scope or block scope ki value global scope mai c ki value ko bhi change kr deti h isley not useful var

    console.log("Inner : "+a)  // 30 yani a ki local value print hogi agr line 10 nhi hoti toh 747 as output
}

console.log(c)  // 100 global c ko 4679 se 100 kr diiya very bad
console.log(a)  // abhi hm global scope mai h toh 747 hi print hoga
console.log(b)  // b ki global value yani 647 print hogi

// local scope mai jo variable ka declaration krte h wo global scope ki value ko change nhi krta 


//                  VERY IMPORTANT POINT FOR INTERVIEW

// browser mai inspect pr click krke console mai jakr jo scope use krte h wo alg h or jo node ke through scope use krte h
// wo alg h



//                 TWO WAYS OF DECLARING A FUNCTION AND PROBLEM WITH THE METHOD TWO


//1)

console.log(addone(5))     // GIVE 6 AS OUTPUT EVEN THOUGH FUNCITON BAAD MAI DECLARE HUA H
function addone(num1){
  return num1 +1
}

//  2)  EXPRESSION MAI FUNCTION

console.log(addtwo(5))       // YHA ERROR AAEGA KYUKI AB FUCNTION EK VARIABLE MAI STORE H WHY ERROR HOISTING PDHEGE TB DEKHEGE
const addtwo = function(num1){
    return num1 +2
}