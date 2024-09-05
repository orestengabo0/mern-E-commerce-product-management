import express from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/products.controller.js'
const router = express.Router()

router.post("/create", createProduct)
router.delete("/delete/:id", deleteProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put("/update/:id", updateProduct)

export default router