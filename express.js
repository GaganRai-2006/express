// const express=require("express")
// const app=express()

// // I am going to get the message from server
// app.get("/",(req,res)=>{
//                     res.send("hello from the express server ")
// })


// // I am going tocreate a server
// app.listen(8000,()=>{
//                     console.log("The server got started")
// })

const express=require("express")
const app=express()
// I am going to ordering the middleware by using the application level
app.use(function(req,res,next){
                   console.log("response came at"+Date.now()) 
                   next()
})
app.get('/',function(req,res,next){
                    res.send("response")
                    next()
                   
})
app.use('/',function(req,res,next){
                    console.log("request came at"+Date.now())
})



// I am giong to create a server
app.listen(3000,()=>{
                    console.log("the server got started")
})
