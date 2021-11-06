const express = require('express');
const connectDB = require('./db/connect');
const app = express();
require("dotenv").config();

app.use(express.json());

const port = 5000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
app.listen(port,()=>{
    console.log(`server Started on Port ${port}`);
});
    } catch (error) {
        console.log(error.message)
    }

}

start();