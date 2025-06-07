import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJWT from './middleware/auth.js';  // Ensure the correct path
import orderRouter from './routes/orderRouter.js';
import dotenv, { config } from 'dotenv';
import cors from "cors";
dotenv,config()

// mongodb+srv://admin:<db_password>@cluster0.etje0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const app = express();
app.use(cors())

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log("Connected to the database");
    }
).catch(
    ()=>{
        console.log("Connection failed");
    }
)

app.use(bodyParser.json());


app.use(bodyParser.json());
app.use(verifyJWT);



app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/order" , orderRouter);


function taskComplete() {
    console.log("Task is Completed");
}

app.listen(5000, taskComplete);


