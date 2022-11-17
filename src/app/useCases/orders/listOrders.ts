import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {
    const order = await Order.find()
    .sort({ createAt: 1})
    .populate('products.product');

    return res.json(order);
  } catch (error) {
    console.log(
      "🚀 ~ file: listCategories.ts ~ line 11 ~ listCategories ~ error",
      error
    );
    res.sendStatus(500);
  }
}
