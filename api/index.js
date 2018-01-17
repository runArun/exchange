import { Router } from 'express';
import orders from './order';
import rate from './rate';

let api = Router();

api.use('/orders', orders);
api.use('/rate', rate);

export default api;

