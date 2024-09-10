import mongoose from "mongoose";
import { DB_NAME, MONGO_DB_URL } from "../constants.js";

const connectMongoDB = async () => {
    try{
        const mongoDBInstance = await mongoose.connect(`${MONGO_DB_URL}/${DB_NAME}`);
        console.log("\nMongoDB is connected successfully! DB Host: ", mongoDBInstance?.connection?.host);
    }catch(error){
        console.log("Error in connecting to the MongoDB: ", error);
        process.exit(1);
    }
}


export default connectMongoDB;