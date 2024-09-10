import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});


export const PORT = process.env.PORT || 5001;
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const MONGO_DB_URL = process.env.MONGO_DB_URL;
