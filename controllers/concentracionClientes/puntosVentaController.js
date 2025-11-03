import { PuntosVentaService } from '../../services/concentracionClientes/puntosVentaService.js';

export class PuntosVentaController {
  constructor() {
    this.puntosVentaService = new PuntosVentaService();
  }

  getAll = async (req, res) => {
    try {
      const data = await this.puntosVentaService.getAll();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  getFields = async (req, res) => {
    try {
      const fields = await this.puntosVentaService.getFields();
      res.status(200).json(fields);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}