function saymyname(){
    console.log("shubham")
}

 //   saymyname      and this is refrence
 //   saymyname()     here we are executing the function

 function addition(num1,num2){          //  yha num1 or num2 parameters h pr jb call kruga kisi specific value ke sath arguments
      return num1 + num2
 }

 addition()             //  NaN   chlo ismai arguments daalte h       (kuch bhi invalid daaloge toh NaN milega)
 addition(648,6483)     //  7131
 const x = addition(3,"4")        //  34 javascript dimag lgaega or 3 ko bhi string mai convert kr lega
 console.log(typeof x)           // string

 const y = addition(3,null)          // null will be treated as 0   conversion pdhe toh the
 console.log(typeof y)               // number


 function who(username){
    return `${username} just loggedin`
 }
 console.log(who("shubham"))              // shubham just loggedin
 console.log(who())                       // undefined just loggedin

 //  undefined means false  ""  means false

 // in case you want to give some default values

function who2(username = "xyz"){
    return `${username} loggedin`
}
console.log(who2())            // default value will be used as no arguments       xyz loggedin


// kya ho agr mujhe aisa functions chahiye ho jisme arguments fix na ho jaise shopping cart in e commerce website
// rest operator is used , rest or spread ek jaise dikhte h pr use case ke hisab se alg hote h

function print(...num1){
    return console.log(num1)
}
print(200,300,400,4837)                // [ 200, 300, 400, 4837 ]

//  How to pass object in function

const user = {
    name : "shubham",
    email : "shubham@gmail.com"
}

function patientemail(anyobject){
    return anyobject.email
}
console.log(patientemail(user))                          //    shubham@gmail.com
console.log(patientemail({                               //    subhash@gamil.com
    name : "subhash",
    email : "subhash@gamil.com"
}))
