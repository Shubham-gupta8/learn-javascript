let score="33";
console.log(typeof score);    //string
let valueinNumber=Number(score);      //convert "33" into 33
console.log(typeof valueinNumber);    //Number

//AB TK TOH SB SHI H PHIR CONVERSION MAI DIKAT KYA H??

let Id="33abc"
console.log(typeof Id);            //string
let conversion=Number(Id);
console.log(typeof conversion);    // number but why 33abc can not be a number. What does conversion really store?? ans NaN
console.log(conversion);          //NaN  (not a number) ironically NaN is not number but it's type is number hence line 11 gives number as ouput

let x=null;
let convert=Number(x);
console.log(convert);            //null is converted into 0 hence output is 0
console.log(typeof convert);      

/*       DIFFERENT SCENERIOS FOR SCORE

 if score is true number(score) will convert it into 1, and if it is false than into 0

 if score is undefined  line 3 will convert it into NaN and it is same for if score is a string
 so basically if a variable can not be converted into number number(variable) convert it into NaN

 */
let isLoggedIn=7438;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);                  //true

/*        DIFFERENT OUTPUT FOR DIFFERENT VALUE OF isLoggedIn

      1) 1            => true
      2) 0            => false
      3) ""           => false
      4) shubham      => true
      5) 7438         => true

*/


