const myobj = {
    username : "shubham",
    age : 20 ,
    welcomeGreeting : function(){
        console.log(`${this.username} , are you hustling ??`)      // without this keyword this line give error
                                                                   // ReferenceError: username is not defined

        console.log(this)                          //  give this object as output as this is reference for this object here                                         
    }
}
console.log(myobj.welcomeGreeting())        //shubham , are you hustling ??
myobj.username = "tushar"
console.log(myobj.welcomeGreeting())       // tushar , are you hustling ??

console.log(this)                          // {}      node environment mai this empty ko reference de rha h global scope khali h

//      VERY IMPORTANT NOTE :   BROWSER MAI LINE 15 WINDOW AS OUTPUT DEGI KYUKI USMAI WINDOW GLOBAL SCOPE HOTA H

// function noob(){
//     console.log(this)    //  ye dega bht saare value jiske baare mai nhi janana
// }

function noob(){
    let username = "shubham"
    console.log(this.username)     
}

noob()            //   undefined hi aaega funcitons mai aise mai this use nhi kr pauga


//   CHLO ARROW FUNCTIN BNAYE

const arrowfunc = () => {
    let username = "shubham"
    console.log(this.username)     // yha bhi function ko execute krne pr undefined hi aaega this no use
    console.log(this)             //  {}
}

//        DIFFERENCE BETWEEN ARROW FUNCTION AND REGULAR FUNCTION KHUD SE KRNA H CHATGPT


//  ANOTHER WAY OF DECLARING ARROW FUNCTION (implicit return)

const func = (nums1 , nums2)  =>  (nums1 + nums2)      // react mai bht use hoga  (nums1 + nums2) ismai se () hta bhi sakte h

// () use krne ka fayda    what if we have to return object without () we have to use {} but phir to return use krna pdega

const f = (myobj1,myobj2) => ({myobj1})

// jismai return keyword use krte h usse explicit return khte h
