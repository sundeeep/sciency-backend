import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env"
});

const app = express();

const LOCALHOST_ORIGIN = process.env.LOCALHOST_ORIGIN;
const PRODUCTION_ORIGIN = process.env.PRODUCTION_ORIGIN;
// const EVERY_ORIGIN = process.env.EVERY_ORIGIN;

const allowedOrigins = [
  LOCALHOST_ORIGIN,
  PRODUCTION_ORIGIN
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

export { app };