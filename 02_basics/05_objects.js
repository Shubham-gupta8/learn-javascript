// object de-structure

const life={
    purpose: "Happinesss",
    toAchieve: "success",
    satisfaction: false
}

//  console.log(life.purpose);          give Happinesss as output 

// clean code object de structure is used in react and in other places

//  const {kya value chahiye} = jis object mai se chahiye

const {purpose} = life
 console.log(purpose)               // give Happinesss as output 

 const {toAchieve : TA} = life
 console.log(TA)                    //  success


 // example in react

//  const navbar = (yha hmesha props.company props.name ye sb likhte h) => {
  
//  }
// navbar(company="shubham")

// how de structuring is used

const navbar = ({company}) => {              // props. nhi use hua uski jgh curly braces se destructuring use kr li

}

navbar(company= "shubham")

//   An API (Application Programming Interface) is a set of rules, protocols, and tools that allow different
//  software applications to communicate with each other.
//  It defines how software components should interact, enabling them to share data and functionality.

//  Api mai kuch values aati h backend se or usse kaise likhna h wo dekhte h pehle ye xml mai hoti thi ab ye json mai hoti h

// api hme object ki form mai milti h or object ke array ke form mai bhi mil sakte h


// {
//     "name": "shubham",
//     "isLoggedin" : true,
//     "learning" : "javascript"
// }

// [
//     {},
//     {},
//     {}
// ]                 api in form of array of objects

