/*  1) WE MAINLY HAVE TWO TYPE OF DATATYPE (PREMITIVE AND NON-PREMITIVE)
    2) BASIS OF CATOGORIZATION:  how they are stored in memory and how can u access it
    3) PRIMITIVE :   7 TYPE     String,Number,Boolean,Symbol,undefined,null,BigInt
       REFERENCE(NON-PRIMITIVE):  array,object,Functions
    4) JavaScript is a dynamically typed language.JavaScript does not require explicit type declarations for variables.
       Instead, the type is determined at runtime, based on the value assigned to the variable. 
*/

let Id=Symbol("123")
let anotherId=Symbol("123")
console.log(Id==anotherId);        //false kyuki symbol uniqueness provide krta h chahe input same ho

//how to define a array

const friends=["deepanshu","tushar","lucky","bipanshu"];

//how to define a object
({
    name: "shubham",
    Idofhim: 123
})
//Wrapping in parentheses tells the JavaScript engine to treat the enclosed code as an object literal rather than a block of code.
// another way of defining a object without paranthesis 
let myobj={
    name: "shubham",
    Idofhim: 123
}


//how to define a function

const myfunction=function(){
    console.log(alert("I will complete this playlist till october 30,2024"))
}
// myfunction();

console.log(typeof myfunction)      // give output as function but we call it function object

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/