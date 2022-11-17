import { Products } from "./../../models/Product";
import { Request, Response } from "express";

export async function createProducts(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;

    const { name, description, price, category, ingredients } = req.body;

    const products = await Products.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
    });

    res.status(201).json(products);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
