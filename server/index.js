const express = require('express');
const details = require("./routes/details");
const connectDB = require('./db/connect');
const app = express();
const Cors = require('cors');

require("dotenv").config();

app.use(express.json());
app.use(Cors());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    next();
});
app.use('/api/v1/details',details)

const port = 8000;

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