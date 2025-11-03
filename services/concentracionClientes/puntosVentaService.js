import { PuntosVenta } from '../../models/concentracionClientes/puntos_venta.js';

export class PuntosVentaService {
  async getAll() {
    try {
      const puntosVenta = await PuntosVenta.findAll();
      return puntosVenta;
    } catch (error) {
      throw new Error('Error al obtener los puntos de venta: ' + error.message);
    }
  }

  async getFields() {
    try {
      const fields = Object.keys(PuntosVenta.getAttributes());
      return fields;
    } catch (error) {
      throw new Error('Error al obtener los campos de puntos de venta: ' + error.message);
    }
  }
}