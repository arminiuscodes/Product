import express from "express";
const router = express.Router();
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller.js";

router.post("/",createProduct);
router.get("/",getProduct)
router.delete("/:id",deleteProduct);
router.put("/:id",updateProduct);


export default router;
