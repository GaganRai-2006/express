// const express=require("express")
// const app=express()
// app.use((req,res,next)=>{
//                     console.log("Welcome to the mw demo class")
//                     next()
// })

// const m1=function(req,res,next){
//                     console.log("request came at",Date.now())
//                     next()
// }
// const m2=function(req,res,next){
//                     console.log("response came at",Date.now())
//                     next()
// }
// app.use("/hello",m1)
// app.get("/hello",(req,res,next)=>{
//                     res.send("message")
//                     next()

// })
// app.use("/hello",m2)





// app.listen(3000,()=>{
//                     console.log("The server got started")
// })

const express=require("express")
const app=express()
app.use(function(req,res,next){
                    console.log("express Demo")
                    next()
})
const m1=function(req,res,next){
                    console.log("request came at",Date.now())
                    next()
}
const m2=function(req,res,next){
                    console.log("response came at",Date.now())

}
app.use("/hello",m1)
app.get("/hello",(req,res,next)=>{
                    res.send("Message")
                    next()
})
app.use("/hello",m2)

// server start
app.listen(3000,()=>{
                    console.log("server got started")
})
