import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import { connectDB } from './config/db.js'
import productRoutes from './routes/product.router.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

const __dirname = path.resolve();

app.use(express.json())
app.use('/products', productRoutes)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend","dist","index.html"))
    })
}

app.listen(5000, () => {
    connectDB()
    console.log(`Server started at port: http://localhost:${PORT}`);
})