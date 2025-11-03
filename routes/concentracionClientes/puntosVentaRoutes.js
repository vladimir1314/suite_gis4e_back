import { Router } from 'express';
import { PuntosVentaController } from '../../controllers/concentracionClientes/puntosVentaController.js';

export const createPuntosVentaRouter = () => {
  const router = Router();
  const puntosVentaController = new PuntosVentaController();

  router.get('/', puntosVentaController.getAll);
  router.get('/fields', puntosVentaController.getFields);

  return router;
};