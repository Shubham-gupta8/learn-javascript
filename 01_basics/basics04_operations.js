// 2**3 means 2 raise to power 3 means 8
// concatination same as java below are some problem regarding concatination in javascript,increment operator is also same
console.log("1"+2);             //12
console.log(1+"2");             //12
console.log("1"+"2"+2+1)        // 1221   note that number 2 and 1 at last also get treated as string
console.log(1+2+3+"4"+2+1)      // 6421     note that all digits before first string behaved as number and digits after first string behaved as string
console.log(+true)              // + has no impact
console.log(+"")                // 0
console.log("")                // kuch print nhi hoga

console.log(null>0)           //false
console.log(null==0)          //false
console.log(null>=0)          //true  
                    
            //   NOTE  EQUALITY CHECK == WORK DIFFERENTLY THAN OTHER COMPARISION FUNCTION B/C COMPARISION CONVERT THE NULL FIRST INTO NUMBER

 //   STRICT CHECK(===)  IT NOT ONLY CHECK THE VALUES BUT ALSO THE DATATYPE          