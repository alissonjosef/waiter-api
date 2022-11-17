import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function listOrders(req: Request, res: Response) {
  try {

    const orderById = req.params
    console.log("🚀 ~ file: listByOrders.ts ~ line 8 ~ listOrders ~ orderById", orderById)

    const order = await Order.find().where().equals(orderById);

    return res.json(order);
  } catch (error) {
    console.log(
      "🚀 ~ file: listCategories.ts ~ line 11 ~ listCategories ~ error",
      error
    );
    res.sendStatus(500);
  }
}
