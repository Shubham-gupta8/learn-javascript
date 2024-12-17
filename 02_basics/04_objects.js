// const xuser = new Object()             singleton object

const xuser = {}                    // non singleton onject

console.log(xuser)                 // dono ka output same hi aaega  empty object i.e   {}

xuser.id = "123abc"
xuser.name = "shubham"
xuser.isLoggedIn = false

console.log(xuser)                  //   { id: '123abc', name: 'shubham', isLoggedIn: false }

xuser.name={
    fullname:{
        fullusername:{
            firstname: "shubham",
            lastname:  "gupta"
        }
    }
}

console.log(xuser)

//   {
//   id: '123abc',
//   name: { fullname: { fullusername: [Object] } },
//   isLoggedIn: false
//   }

console.log(xuser.name.fullname.fullusername.firstname)        // shubham

const obj1= {1:"a" , 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}

// const obj3 = {obj1,obj2}               object ke andar object dega but hme ek hi object chahiya

// const obj3 = Object.assign({},obj1,obj2,obj3)   OR

const obj3 = {...obj1,...obj2}
console.log(obj3)                                      // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


console.log(Object.keys(xuser))       // print array of all keys
console.log(Object.values(xuser))          // print array of all values
console.log(Object.entries(xuser))    // return array where each element is also an array of keys and values

//    [
//       [ 'id', '123abc' ],
//       [ 'name', { fullname: [Object] } ],
//       [ 'isLoggedIn', false ]
//      ]

console.log(xuser.hasOwnProperty(isLoggedIn))    // true

