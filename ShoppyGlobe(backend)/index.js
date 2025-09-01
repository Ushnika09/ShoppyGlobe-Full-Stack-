import { configDotenv } from "dotenv"
import express from "express"
import connectDb from "./config/db.js"
import ProductRoutes from "./Routes/ProductRoutes.js"

const app=express()

configDotenv()
connectDb()

app.use("/products", ProductRoutes);


app.get("/",(req,res)=>{
    res.send("WELCOME to SHOPPYGLOBE!!")
})

const PORT= process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running in port ${PORT}`);
})