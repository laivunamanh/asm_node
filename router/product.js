import express from "express";
import { getAllProduct } from "../controller/product.js";
import { getProductById } from "../controller/product.js";
import { AddProduct } from "../controller/product.js";
import { UpdateProduct } from "../controller/product.js";
import { DeleteProduct } from "../controller/product.js";
const router = express.Router();
router.get('/products', getAllProduct)
router.get('/products/:id', getProductById)
router.post('/products', AddProduct)
router.put('/products/:id', UpdateProduct)
router.delete('/products/:id', DeleteProduct)

export default router