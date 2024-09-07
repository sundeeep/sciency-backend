import express from "express";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "http://localhost:3000/",
  "https://drugboard.ai/"
];

// CORS options
 const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {  
  res.send("Hello World");
});

app.listen(5000, () =>{
    console.log("Server is running on port 5000");
}); 