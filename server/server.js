import express from 'express';
import connectDB from './database/mongoDB.js';
import router from './routes/user.route.js';
import cors from 'cors'  // third-party imported middleware

import dotenv from 'dotenv'
dotenv.config()


const app = express();  // here express() is object

// mounting

app.use(cors({
    origin:'*',
    methods:['GET','POST','PUT','DELETE']
}))

app.use(express.json()) // in-built middleware
app.use(router)

const port = process.env.PORT

connectDB()

app.listen(port, ()=> {
    console.log(`Server has started on port: ${port}`)
})