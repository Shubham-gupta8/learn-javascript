let mydate= new Date()
console.log(mydate)                                      // 2024-12-09T14:37:56.239Z
console.log(mydate.toDateString())                       // Mon Dec 09 2024
console.log(mydate.toISOString())                        // 2024-12-09T14:43:14.111Z
console.log(mydate.toJSON())                             // 2024-12-09T14:43:14.111Z
console.log(mydate.toLocaleDateString())                 // 12/9/2024
console.log(mydate.toLocaleTimeString())                 // 2:43:14 PM
console.log(mydate.toString())                           // Mon Dec 09 2024 14:43:14 GMT+0000 (Coordinated Universal Time)
                  // DATE IS A OBJECT

// HOW TO DECLARE DATE

let createDate= new Date(2024, 0, 3)
console.log(createDate.toDateString())                  // Wed Jan 03 2024            0->jan
console.log(createDate.toLocaleString())                // 1/3/2024, 12:00:00 AM      m/day/yyyy

// YYYY/MM/DD SYNTAX
createDate= "2024-01-23"
console.log(createDate)                                 // 2024-01-23

//adding more information

createDate=new Date(2024,0,3,0,0)
console.log(createDate)

//about timestamp used in while crating a quiz to choose the winner who answered fastest conver the date in millisecond

let timestamp= Date.now()                  //date when executed in millisecond
console.log(timestamp)
console.log(createDate.getTime())         //createdate in millisecond 

//The output of both Date.now() and createDate.getTime() is a long number because they return the number of milliseconds since January 1, 1970, 00:00:00 UTC. 
//This format is known as a Unix timestamp or epoch time.



// HOW TO CONVERT IN SECONDS

console.log(Math.floor(timestamp/1000))

// SOME OTHER METHOD

console.log(createDate.getDate())
console.log(createDate.getHours())
console.log(createDate.getMinutes())  //etc

//VERY VERY IMPORTANT IN MANY PROJECTS createDate.toLocaleString() ,ismai object define krte h or ismai bht saare perimeters 
//hote h

createDate.toLocaleString('default',{
    weekday: "long"
})

console.log(`${createDate.getDate()} that is also a way of declaring date`)


