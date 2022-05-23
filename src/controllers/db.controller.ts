import type { Request, Response } from 'express';
import { OrderModel } from '../models/Order.model.js';
import { TractoModel } from '../models/Tracto.model.js';

async function create (req:Request, res:Response) {
  // eslint-disable-next-line no-console
  console.log('create');
  const tractoDoc = new TractoModel(req.body);
  await tractoDoc.save();
  res.redirect('/produits');
}
async function deleteById (req:Request, res:Response) {
  // eslint-disable-next-line no-console
  console.log('delete');
  await TractoModel.findByIdAndDelete(req.params.id);
  res.redirect('/produits');
}

async function addOrder (req:Request, res:Response) {
  // eslint-disable-next-line no-console
  console.log('addOrder');
  const tracto = await TractoModel.findById(req.body.id);
  if (!tracto) return;
  const order = await new OrderModel({ tracto, date: new Date(), quantity: req.body.quantity });
  await Promise.all([tracto.setStock(parseInt(req.body.quantity)), order.save()]);

  res.redirect('/produits');
}

export { create, deleteById, addOrder };
