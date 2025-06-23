import express from 'express';
import path from 'path'
import cors from 'cors';
const app = express();
app.use(express.json());//allows us to except json data in req.body
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Product from "./models/product.model.js"
import mongoose from 'mongoose';
dotenv.config();
import productRoutes from "./routes/product.route.js"
const __dirname =path.resolve();

app.use(cors());

app.use(express.json()); // allows us to accept json data
app.use("/api/products",productRoutes);
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    connectDB();
    console.log("Server is running at:",PORT);
})

