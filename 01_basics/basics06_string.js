let name= "shubham"
let name2=new String("shubham")    //another way of declaring string koi difference nhi h dono mai object bnta h
let repocnt= 50
console.log("my name is "+name+" my repocnt is "+repocnt)          //old fashion

console.log(`my name is ${name} my repocnt is ${repocnt}`)        //better way

console.log(name.length)
console.log(name.indexOf('h'))      // 1   give the index of first occurence
console.log(name.slice(-5,4))       // -5 means 5th character from the end(basically it is same as the substring but -ve parameter are allowed)


let animal= "  lion  "
console.log(animal.trim())   //remove extra spaces

  // more methods      name.replace('h','b')  name.includes("am")

  let sentence="my-name-is-shubham"

  console.log(sentence.split('-'))    //output ["my" , "name" , "is" , "shubham"]  array of  slitterms on the basis of seprator mentioned in function split
  
