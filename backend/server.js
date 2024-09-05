import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productRoutes from './routes/product.router.js'

dotenv.config()

const PORT = process.env.PORT || 4000

const app = express()
app.use(express.json())

app.use('/products', productRoutes)

app.listen(5000, () => {
    connectDB()
    console.log(`Server started at port: http://localhost:${PORT}`);
})