import { createPuntosVentaRouter } from '../../routes/concentracionClientes/puntosVentaRoutes.js';

export function setupPuntosVentaRoutes(app) {
  const puntosVentaRouter = createPuntosVentaRouter();
  app.use('/api/concentracion-clientes/puntos-venta', puntosVentaRouter);
}