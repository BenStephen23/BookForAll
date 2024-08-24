import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.DATABASE);
        console.log(`MongoDB Connection: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDB