import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";


const MONGO_URL = process.env.MONGO_URI;

export const connectToMongoDb= mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to MongoDb');
}).catch((error)=>{
    console.log('MongoDb error', error);
})

