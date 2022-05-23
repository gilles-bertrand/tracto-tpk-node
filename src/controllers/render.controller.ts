import type { Request, Response } from 'express';
import { OrderModel } from '../models/Order.model.js';
import { TractoModel } from '../models/Tracto.model.js';

async function index (req:Request, res:Response) {
  res.render('index');
}
async function produits (req:Request, res:Response) {
  const tractos = await TractoModel.find().lean();
  res.render('produits', { data: { tractos } });
}
async function produitsDetails (req:Request, res:Response) {
  const tracto = await TractoModel.findById(req.params.id).lean();
  res.render('produits/details', { data: { tracto } });
}
async function tractoForm (req:Request, res:Response) {
  res.render('add-tracto-form');
}
async function getOrders (req:Request, res:Response) {
  // eslint-disable-next-line no-console
  console.log('getOrders');
  const orders = await OrderModel.find().populate('tracto').lean().exec();
  res.render('orders', { data: { orders } });
}

export { index, tractoForm, produits, produitsDetails, getOrders };
