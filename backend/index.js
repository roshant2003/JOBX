import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.routes.js";              //route from users routes file
dotenv.config({});
const app=express();

//basic api get request 

app.get("/home",(req,res)=>{
    return res.status(200).json({
        message:"I am coming from backend",             // this is a simple json file that will be printed in the localhost:3000/home
        success:true
    })
});

//Middleware to parse JSON requests  express.json()
app.use(express.json());

//Middleware to parse URL-encoded data

app.use(express.urlencoded({extended:true}));

// Middleware to parse cookies   // Access cookies through req.cookies
app.use(cookieParser());

const corsOptions={
    origin:"http://localhost:5172",
    Credentials:true
}
app.use(cors(corsOptions))

const PORT=process.env.PORT || 3001;

//apis
app.use("/api/v1/user",userRoute);


//"http://localhost:8001/api/v1/user/register"
//"http://localhost:8001/api/v1/user/login"
//"http://localhost:8001/api/v1/user/profile/update"
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
}
)

//mongodb+srv://roshanthiagarajan:fSngTsET75s9IDF0@cluster0.onro5.mongodb.net/