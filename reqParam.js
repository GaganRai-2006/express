const express=require("express")
const app=express()
const students={
                    1:{
                                        name:"Gagan",
                                        age:21,
                                        subject:"Java script",
                                        id:1
                    },
                    2:{
                                        name:"Rai",
                                        age:18,
                                        subject:"Java",
                                        id:2
                    },
                    3:{
                                        name:"Gagan Rai",
                                        age:28,
                                        subject:"science",
                                        id:3,
                    },
}
/*app.get("/api/v1/students/:id",(req,res)=>{
                    const student_id=req.params.id
                    const student_details=students[student_id]
                    if(student_details){
                                        res.status(200).send(student_details)
                    }else{
                                        res.status(500).send({
                                                            err:"The student not found"
                                        })
                    }
})**/


/**app.get("/api/v1/students",(req,res)=>{
                    console.log(req.query)
                    const student_id=req.query.id
                    const student_obj=students[student_id]
                    if(student_obj){
                                        res.status(200).send(student_obj)
                    }else{
                                        res.status(500).send({
                                                            error:"The student not found"
                                        })
                    }
})*/

app.use(express.json())

app.post("/api/v1/students",(req,res)=>{
                    console.log("Caling from post man")
                    console.log(req.body)
                    students[req.body.id]=req.body
                    res.status(201).send(students[req.body.id])
})



//server starting
app.listen(3000,()=>{
                    console.log("server is successfully started")
})