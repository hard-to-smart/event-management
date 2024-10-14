import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Database connected");
    })
    .catch((error)=>{
        console.log(error);
    })
}