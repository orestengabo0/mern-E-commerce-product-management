import mongoose from 'mongoose';
import Joi from 'joi';
const { string } = Joi

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

const validateCreateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.string().required(),
        image: Joi.string().required()
    })
    return schema.validate(product);
}
const validateUpdateProduct = (product) => {
    const schema = Joi.object({
        name: Joi.string().optional(),
        price: Joi.string().optional(),
        image: Joi.string().optional()
    })
    return schema.validate(product);
}
export {validateCreateProduct, validateUpdateProduct, Product}