import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

dotenv.config()
const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Hello world</h1>")
})

app.listen(5000, () => {
    connectDB()
    console.log("Server started at port: http://localhost:5000");
})