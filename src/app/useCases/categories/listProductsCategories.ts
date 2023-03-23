import { Request, Response } from "express";
import { Products } from "../../models/Product";

export async function listProductsCategories(req: Request, res: Response) {
  try {
    const { catetgoryId } = req.params
    const products = await Products.find().where("category").equals(catetgoryId);

    return res.json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
