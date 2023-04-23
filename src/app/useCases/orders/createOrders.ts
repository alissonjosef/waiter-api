import { io } from '../../..';
import { Order } from './../../models/Order';
import { Request, Response } from "express";

export async function createOrders(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({
      table,
      products
    });
    const orderDetails = await order.populate('products.product');

    io.emit('orders@new', orderDetails);

    res.status(201).json(order);
  } catch (error) {
    console.log(
      "🚀 ~ file: createCategories.ts ~ line 10 ~ createCategory ~ error",
      error
    );
    res.sendStatus(500)
  }
}
