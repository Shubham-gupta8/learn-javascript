const myobj = {
    username : "shubham",
    age : 20 ,
    welcomeGreeting : function(){
        console.log(`${this.username} , are you hustling ??`)
    }
}
const {welcomeGreeting : wg} = myobj
console.log(wg)