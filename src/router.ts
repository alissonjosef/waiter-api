import path from 'node:path'

import { Router } from "express";
import multer from 'multer'

import { createCategory } from "./app/useCases/categories/createCategories";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createProducts } from "./app/useCases/products/createProducts";
import { listProducts } from "./app/useCases/products/listProducts";
import { listProductsCategories } from './app/useCases/categories/listProductsCategories';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrders } from './app/useCases/orders/createOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { deleteOrder } from './app/useCases/orders/deleteOrder';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req,file,callback){
      callback(null, path.resolve(__dirname,'..', 'uploads'));
    },
    filename(req, file,callback){
      callback(null, `${Date.now()}-${file.originalname}`)
    }
  })
})

router.get("/categories", listCategories)

router.post("/categories", createCategory)

router.get("/products", listProducts)

router.post("/products",upload.single('image'), createProducts)

router.get("/categories/:catetgoryId/products", listProductsCategories)

router.get("/orders", listOrders)

router.post("/orders", createOrders)

router.patch("/orders/:orderId", changeOrderStatus)

router.delete("/orders/:orderId", deleteOrder)
