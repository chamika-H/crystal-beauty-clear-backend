import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import verifyJWT from './middleware/auth.js';  // Ensure the correct path
import orderRouter from './routes/orderRouter.js';
import dotenv, { config } from 'dotenv';
dotenv,config()

// mongodb+srv://admin:<db_password>@cluster0.etje0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
let app = express();

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

// app.get("/", (req, res) => {
//     console.log(req.body)
//     console.log("Get request is received"); // This will now log in the terminal
//     res.send("Hello, World!"); // Send a response to Postman/browser
// });

// app.delete("/", (req, res) => {
//     console.log(req.body);
//     console.log("Delete request received");
//     res.json({
//         message: "this is a delete request"
//     });
// });

// app.post("/",
//     (req,res)=>{

//         console.log(req.body)
//     }
// )

// app.get("/",
//     (req,res)=>{
//        Student.find().then(

//             (students)=>{
//                 res.json(students)
//             }

//        ).catch(
//         ()=>{
//             res.json(
//                 {
//                     message: "An error occurred"
//                 }
//             )
//         }
//        )       
//     }
// )


// app.post("/", async (req, res) => {  
//     console.log("Received data:", req.body);
    
//     try {
//         const studentSchema = new mongoose.Schema({
//             name: String,
//             age: Number,
//             city: String,
//         });

//         // Ensure the model is not redefined
//         const Student = mongoose.models.students || mongoose.model("students", studentSchema);

//         const student = new Student(req.body);
//         await student.save();

//         console.log("✅ Student saved successfully");
//         res.json({ message: "Student saved successfully" });  // Ensure response is sent

//     } catch (error) {
//         console.error("❌ Student save failed", error);
//         res.status(500).json({ message: "Student save failed", error: error.message });
//     }
// });


// app.put("/", (req, res) => {
//     console.log(req.body);
//     console.log("Put request received");
//     res.json({
//         message: "this is a put request"
//     });
// });

app.use(bodyParser.json());
app.use(verifyJWT);



app.use("/api/user",userRouter);
app.use("/api/product",productRouter);
app.use("/api/order" , orderRouter);


function taskComplete() {
    console.log("Task is Completed");
}

app.listen(5000, taskComplete);


