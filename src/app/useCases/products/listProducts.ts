import { Products } from './../../models/Product';
import { Request, Response } from "express";


export async function listProducts(req: Request, res: Response){
  const products = await Products.find()

  return res.json(products)
}
