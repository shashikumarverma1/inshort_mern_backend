const express=require("express")
const mongoose=require("mongoose")
const app=express()
const cors=require("cors")
const data=require("./data.js")

const dbconnect=async()=>{
    const uri="mongodb://localhost:27017/web"
    try{
     await mongoose.connect(uri)
     console.log('db conected')
    //  console.log(data)
    }catch(err){
        console.log(err)
    }
}
app.use(cors())
dbconnect()
const studentSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true,
        unique:true
    },
   
    link:{
        type:String,
        require:true
    },
    timestamp:{
        type:String,
        require:true
    },
    publisher:{
        type:String,
        require:true
    },
})
//modal
const student=mongoose.model("student",studentSchema)

// send data
const creatitem=async(data)=>{
    try{
     const res= await student.insertMany(data.module)
        // const {data1} =data
      
       console.log(res)  
        
    // const student1=new student({
    //     title:'monu',
    //     author:"body"
    // })
    // const studentdata=await student.insertMany([student1])
    }catch(err){
console.log(err)
    }
}
creatitem(data)
// read item
const readItem=async()=>{
    try{
        const res=await student.find();
        console.log(res)
    
    }catch(err){
        console.log(err)
    }
}
readItem()

// creat route
const route=express.Router();
route.get('/news',async(req,res)=>{
    try{
     const data= await student.find({})
     console.log(data)
      res.status(200).json(data)
    }catch(err){
        res.status().json(500).json({message:data.message})
    }
})
app.use('/',route)

app.listen(5600,()=>{
    console.log("server is runing 5500")
})