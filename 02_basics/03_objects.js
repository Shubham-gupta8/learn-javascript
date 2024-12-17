//  there are two ways of declaring objects   like constructor and like litral

//  litral ki trah declare krte waqt sikelton nhi bnta h pr constructor mai bnta h

//  now we learn about object litrals

// how to declare symbol 
   const mysym= Symbol("abc")

// how to declare symbol in objects :  using square brackets while writing key   

const jsuser={
    name: "shhubham",
    "full name" : "shubham gupta",
    [mysym] : "abc",
    age: 20,
    isloggedin: false
}

console.log(jsuser.age)      // might not work in some cases
console.log(jsuser["age"])
console.log(jsuser."full name")    //error
console.log(jsuser["full name"])
