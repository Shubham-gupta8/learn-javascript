// array -> object, array in javascript is resizable
// copy operation of array in javascript make shallow copies means properties share the same reference point

                         //DECLARATION OF ARRAY

const myarr=[1,2,3,4,5]
const heroes=["ironman","batman","superman","spiderman"]
const numericarr=new Array(1,2,3,4,5)
console.log(myarr[4]) // 0 based indexing
console.log(myarr)
 

                       //ARRAY OPERATIONS

myarr.push(6)
console.log(myarr)     //[ 1, 2, 3, 4, 5, 6 ]        
myarr.pop()              // remove last element
myarr.unshift(9)       //insert 9 at the start of the array not very optimize as we have to shift each value but needed in some case
myarr.unshift(10)
myarr.shift()          // remove first first element and shift each element left by 1
console.log(myarr)           // [ 9, 1, 2, 3, 4, 5 ]12

const newarr= myarr.join()   // array ko string mai convert kr dega
console.log(myarr)
console.log(newarr)
console.log(typeof newarr)

       //      DIFFERENCE BETWEEN SPLICE AND SLICE

const arr1= [74,327,387,590,2378]
const slicearr= arr1.slice(1,4)      // 4-exclusive  
console.log("A "+ arr1)                                                //  A 74,327,387,590,2378
console.log(slicearr)                                                  //  [ 327, 387, 590 ]
const splicearr= arr1.splice(1,4)   // 4-inclusive
console.log("B "+ arr1)                                               //   B 74
console.log(splicearr)                                                //   [ 327, 387, 590, 2378 ]
