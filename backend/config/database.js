const mongoose=require('mongoose')

const connectDb=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
        console.log("mongodb connected successfully");
    }).catch(err=>{
        console.log("mongodb connection failed");
    })
}
module.exports=connectDb;