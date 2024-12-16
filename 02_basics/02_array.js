const marvel_heroes = ["spiderman","ironman","drstrange"]
const dc_heroes = ["superman","flash","batman"]

 marvel_heroes.push(dc_heroes)          //     marvel_heroes.concat(dc_heroes)   

// [
//     'spiderman',
//     'ironman',
//     'drstrange',
//     [ 'superman', 'flash', 'batman' ]            array ke andar array
//   ]

console.log(marvel_heroes)
console.log(marvel_heroes[3][2])           // batman

// concat will give you new array while push add in original array itself

const allheroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes)                               //[ 'spiderman', 'ironman', 'drstrange', 'superman', 'flash', 'batman' ]


//  alternative of concat is spread

const allh = [...marvel_heroes,...dc_heroes]       ////[ 'spiderman', 'ironman', 'drstrange', 'superman', 'flash', 'batman' ]


// suppose we have data structure like array ke andar array ke ander array how to spread it??  (use of flat)

const num =[1,2,[2,3,4,5],3,6,7,5,[2,3,5,3,2,[5,5,6,4,34,3,4,[3243,32,,32,23,23,3,4]]]]  // dept = 4
const newarr = num.flat(3)                   // flat always give new array
        
console.log(newarr)  //  3 is depth upto which it is spread

console.log(Array.isArray("Hitesh"))            //true
console.log(Array.from("hitesh"))             // convert hitesh string into array
console.log(Array.from({name: "Hitesh"}))         //  it will give empty string kyuki conversion nhi ho paa rha

const score1 =100
const score2 =200
const score3 =300
console.log(Array.of(score1,score2,score3))   // give new array of score1,score2,score3


