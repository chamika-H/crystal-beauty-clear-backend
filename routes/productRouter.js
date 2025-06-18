import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, searchProduct, updateProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post("/",createProduct)
productRouter.get("/",getProducts)
productRouter.get("/search/:id",searchProduct)
productRouter.delete("/:productId",deleteProduct)
productRouter.put("/:productId",updateProduct)
productRouter.get("/:id" ,getProductById)

export default productRouter;