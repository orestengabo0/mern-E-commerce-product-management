import { Product, validateCreateProduct, validateUpdateProduct } from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        if(products.length === 0) return res.status(404).json({success: true, message: "No product found."});
        res.status(200).json({success: true, data: products})
    } catch (error) {
        console.error("Error retreiving products: ", error.message)
        res.status(500).json({success: false, message: "Server error."})
    }
}
export const getProductById = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if(!product) res.status(404).json({success: false, message: "Item not found!"}) 
        res.status(200).json({success: true, data: product})
    } catch (error) {
        console.error("Error retrieving product: ", error.message);
        res.status(500).json({success: false, message: "Server error"}) 
    }
}

export const createProduct = async(req, res) => {
    const {error} = validateCreateProduct(req.body);
    if (error) return res.status(400).json({success: false, message: error.details[0].message});

    const product = new Product(req.body)
    try {
        await product.save()
        res.status(201).json({success: true, data: product})
    } catch (error) {
        console.error("Error creating a product: ", error.message)
        res.status(500).json({success: false, message: "Server error"})
    }
}
export const deleteProduct = async(req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)   
        if(!product) return res.status(400).json({success: false, message: "No product found"})
        res.status(200).json({success: true, message: "Product deleted"})
    } catch (error) {
        console.error("Error deleting a product: ", error.message)
        res.status(500).json({success: false, message: "Server error"})
    }
}

export const updateProduct = async (req, res) => {
	const { id } = req.params;

	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};