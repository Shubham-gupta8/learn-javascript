//storing in variable

const promiseOne = new Promise(function(resolve,reject){
    console.log("just complete promise one")
    resolve()
})

promiseOne.then(function(){
    console.log("promise one response")
})

// same without storing in a variable

new Promise(function(resolve,reject){
    console.log("just completed promise two")
    resolve()
}).then(function(){
    console.log("done with promise two response")
})

/*

output of above code


just complete promise one
just completed promise two
promise one response
done with promise two response

why??

CALL STACK (sync)
│
├─ new Promise (promiseOne) → log
├─ promiseOne.then (queued)
├─ new Promise (promiseTwo) → log
├─ promiseTwo.then (queued)
│
└─ stack empty

MICROTASK QUEUE
│
├─ promiseOne.then
├─ promiseTwo.then

order of execution in js

synchronous.js --> microtask(.then catch etc)  --> macrotask(setTimeout etc)


example

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("sync");

output

sync
promise
timeout

*/


const promisefour = new Promise(function (resolve,reject){
    const error = false;

    if(!error){
        resolve({
            userName : "shubham",
            age : 22,
            action : "doing js"
        })
    }else{
        reject({
            status : "failed",
            Error : "Something went Wrong"
        })
    }
})


const res = promisefour.then(function(user){
    console.log(user)
    return user.userName
})

console.log(res)


/*
why log of res output is Promise { <pending> }

When you call .then(), it immediately returns a new Promise object.
At the moment console.log(res) runs, that new promise is still in a pending state
because the code inside .then() has not finished running yet. 
Synchronous Execution: console.log(res) runs immediately.
Asynchronous Execution: The function inside .then() is moved to the Microtask Queue and 
only runs after all synchronous code (including your log) is finished. 

Using your provided logic:
1) Call Stack: promisefour is created. promisefour.then() is called and 
   immediately returns a pending promise, which is stored in res.
2) Call Stack: console.log(res) executes. It prints the pending promise object 
   because the microtask hasn't started.
3) Stack Empty: Synchronous code is done. JS checks the Microtask Queue.
4) Microtask Queue: The callback for .then() runs.
   It logs the user object and resolves the promise res with the value "shubham".


*/


/*
          Production Use Case: Multi-Step API Workflow


In a production environment, you rarely just multiply numbers. A common use case is a dependent sequential workflow, such as an e-commerce order process. 
Scenario: A user places an order. You must:
1) Fetch user details from a database.
2) Validate if they have enough balance or a valid payment method.
3) Process the order and create a receipt.
4) Send a confirmation email. 


*/


// Function simulating an API call to get a user
function getUser(userId) {
    return fetch(`/api/users/${userId}`).then(res => res.json());
}

// Function to check user status
function checkStatus(user) {
    if (!user.isActive) throw new Error("User is inactive");
    return user; 
}

// Function to process an order
function processOrder(user) {
    return fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({ userId: user.id })
    }).then(res => res.json());
}

// PRODUCTION CHAIN
getUser(123)
    .then(user => checkStatus(user))       // Step 1: Validate user
    .then(user => processOrder(user))      // Step 2: Create order based on user data
    .then(receipt => {                     // Step 3: Handle final success
        console.log("Order Successful:", receipt.orderId);
        updateUI(receipt); 
    })
    .catch(error => {                      // Step 4: Centralized Error Handling
        // If ANY step fails, it jumps here immediately
        showNotification("Failed to place order: " + error.message);
    })
    .finally(() => {
        stopLoadingSpinner();              // Cleanup (stop UI loaders)
    });


    /*
    Why Use Chaining in Production?
    1) Avoids "Callback Hell": Keeps the code "flat" and readable instead of deeply nested.
    2) Sequential Logic: Ensures that you don't try to process an order before you know
       who the user is.
    3) Centralized Error Handling: A single .catch() at the end can handle failures
       from any of the preceding steps, making the code more robust.
    4) State Management: It is ideal for modern frontend frameworks (like React or Vue)
       to handle loading states or UI updates after complex data fetching. 

    */
