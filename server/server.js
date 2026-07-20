import express from 'express';
import connectDB from './database/mongoDB.js';
import router from './routes/user.route.js';
import cors from 'cors'  // third-party imported middleware

import dotenv from 'dotenv'
dotenv.config()


const app = express();  // here express() is object

// mounting

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://employee-management-system-virid-sigma.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(express.json()) // in-built middleware
app.use(router)

const port = process.env.PORT || 4000

connectDB()


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the backend</h1>')
})
app.listen(port, ()=> {
    console.log(`Server has started on port: ${port}`)
})