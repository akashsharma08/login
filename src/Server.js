  const mongoose=require("mongoose")
  mongoose.connect("mongodb+srv://chaharhimanshu331842:chaharhimanshu331842@cluster0.28ipv4z.mongodb.net/")
  .then(()=>{
      console.log("mongodb connected");
  })
  .catch(()=>{
      console.log('failed');
  })
  
  
  const newSchema=new mongoose.Schema({
      email:{
          type:String,
          required:true
      },
      password:{
          type:String,
          required:true
      }
  })
  
  const collection = mongoose.model("collection",newSchema)
  
  module.exports=collection