import { ContribuyenteService } from "../../services/satgisPracticante/contribuyenteService.js";

const contribuyenteService = new ContribuyenteService();

export class ContribuyenteController {
  // Constructor de la clase, actualmente no hace nada
  constructor() {}

  // Método para obtener todos los contribuyentes
  // Responde a la ruta GET /contribuyentes
  async getContribuyentes(req, res) {
    try {
      const data = await contribuyenteService.getContribuyentes();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para obtener un contribuyente por su número de documento
  // Responde a la ruta GET /contribuyentes/:c_num_documento
  async getContribuyenteById(req, res) {
    const { c_num_documento } = req.params;
    try {
      const data = await contribuyenteService.getContribuyenteById(c_num_documento);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para crear un nuevo contribuyente
  // Responde a la ruta POST /contribuyentes
  async createContribuyente(req, res) {
    try {
      const data = await contribuyenteService.createContribuyente(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para actualizar un contribuyente existente
  // Responde a la ruta PUT /contribuyentes/:c_num_documento
  async updateContribuyente(req, res) {
    const { c_num_documento } = req.params;
    try {
      const data = await contribuyenteService.updateContribuyente(c_num_documento, req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para eliminar un contribuyente por su número de documento
  // Responde a la ruta DELETE /contribuyentes/:c_num_documento
  async deleteContribuyente(req, res) {
    const { c_num_documento } = req.params;
    try {
      const data = await contribuyenteService.deleteContribuyente(c_num_documento);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
