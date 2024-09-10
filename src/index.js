import { app } from "./app.js";
import dotenv from "dotenv";
import { PORT } from "./constants.js";
import connectMongoDB from "./db/index.js";

dotenv.config({
  path: "./.env"
});


connectMongoDB()
.then(()=>{
  app.listen(PORT, () =>{
      console.log(`Server is running on port ${PORT}`);
  })
}).catch((error)=>{
    console.log("Error in connecting to the MongoDB: ", error);
    process.exit(1);
})