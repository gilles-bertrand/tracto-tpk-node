import { Router } from 'express';
import { addOrder, create, deleteById } from './controllers/db.controller.js';
import { index, produits, produitsDetails, tractoForm, getOrders } from './controllers/render.controller.js';

const router : Router = Router();

router.get('/', index);
router.get('/add-tracto-form', tractoForm);
router.get('/produits/:id', produitsDetails);
router.get('/produits', produits);
router.post('/add-order', addOrder);
router.get('/orders', getOrders);
router.post('/create-tracto', create);
router.get('/delete-tracto/:id', deleteById);
export { router };
