import express from 'express'

const App = express()

App.get('/',(req,res)=>{
    res.send("welcome to calculator")
})

App.get('/sum',(req,res)=>{
    let a = Number(req.query.a)
    let b = Number(req.query.b)

    if(isNaN(a) || isNaN(b)){
       return  res.status(400).json({
            status : 400,
            message : "invalid number"
        })
    }


    let c = a+b


    res.send({
        status : 200,
        message : c
    })
})

App.listen(3000,'0.0.0.0',()=>{
    console.log("App is running on port 3000")
})