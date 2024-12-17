//  there are two ways of declaring objects   like constructor and like litral

//  litral ki trah declare krte waqt sikelton nhi bnta h pr constructor mai bnta h

//  now we learn about object litrals

// how to declare symbol 
   const mysym= Symbol("abc")

// how to declare symbol in objects :  using square brackets while writing key   

const jsuser={
    name: "shhubham",
    "full name" : "shubham gupta",
    [mysym] : "abc",                      // abc act as symbol
    mysym : "mnp",                        //  mnp act as string
    age: 20,
    isloggedin: false
}

console.log(jsuser.age)      // might not work in some cases
console.log(jsuser["age"])
console.log(jsuser."full name")    //error
console.log(jsuser["full name"])

console.log(typeof jsuser.mysym)      // String
console.log(typeof [mysym])           // symbol

// how to change the value of any key in object

jsuser.name = "reena"

// now if you want any modification in the object should not be allowed use Object.freeze()

Object.freeze(jsuser)

jsuser.name = "priya"      // error bhi nhi dega koi change bhi nhi hoga


//  fucntions in objects

jsuser.greetings1 = function(){
    console.log("hello javasript user")                    // hello javasript user
}

jsuser.greeting2 = function(){
    console.log(`hello javasript user ${this["full name"]}`)             // hello javasript user shubham gupta
}

console.log(jsuser.greeting2)               // [function  (anonymous)]     return that greeting2 is a function but don't run that function  

console.log(jsuser.greeting2())            //  hello javasript user shubham gupta




 