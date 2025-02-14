import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/Userroute.js';
import cors from 'cors';

const app = express();
//middlware for passing json request to body
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

app.use('/api',router);
mongoose.connect(MONGO_URL).then(()=>{
    console.log("Database connected");
    app.listen(PORT)
});
