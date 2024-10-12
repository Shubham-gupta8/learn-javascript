const studentId= 1234
let name= "shubham"
var standard = 10       //"10" this mean string     10 this means numeric value
// studentId=34       can't be changed as studentId is const
name= "reena"
standard= 40
// name=12         previously name is string but now it is numeric value which is allowed in javascript
console.log(studentId,name,standard)
/*
DIFF BETWEEN VAR AND LET
var: Variables declared with var have function scope,
     meaning they are accessible within the entire function, 
     regardless of block-level scope (e.g., if/else, loop, or switch statements).
let: Variables declared with let have block scope,
     which means they are only accessible within the block they are declared in (e.g., if/else, loop, or switch statements). 
     If you try to access a let variable outside its block scope, you’ll get a ReferenceError.
*/