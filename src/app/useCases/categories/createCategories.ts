import { Request, Response } from "express";
import { Category } from "../../models/Category";

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const cateogory = await Category.create({
      name,
      icon,
    });

    res.status(201).json(cateogory);
  } catch (error) {
    console.log(
      "🚀 ~ file: createCategories.ts ~ line 10 ~ createCategory ~ error",
      error
    );
    res.sendStatus(500)
  }
}
