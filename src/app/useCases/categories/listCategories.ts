import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function listCategories(req: Request, res: Response) {
  try {
    const categories = await Category.find();

    return res.json(categories);
  } catch (error) {
    console.log(
      "🚀 ~ file: listCategories.ts ~ line 11 ~ listCategories ~ error",
      error
    );
    res.sendStatus(500);
  }
}
