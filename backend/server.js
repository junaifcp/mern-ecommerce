const dotenv=require('dotenv')
const app=require('./app')
const conneectDb=require('./config/database')

//config
dotenv.config({path:"config/config.env"})

//connecting to database
conneectDb() 





app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})