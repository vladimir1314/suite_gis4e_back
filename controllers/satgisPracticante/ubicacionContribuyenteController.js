import { UbicacionContribuyenteService } from "../../services/satgisPracticante/ubicacionContribuyenteService.js";

const ubicacionService = new UbicacionContribuyenteService();

export class UbicacionContribuyenteController {
  // Constructor de la clase, actualmente no hace nada
  constructor() {}

  // Método para obtener todas las ubicaciones de contribuyentes
  // Responde a la ruta GET /ubicacion_contribuyente
  async getUbicaciones(req, res) {
    try {
      const data = await ubicacionService.getUbicaciones();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para obtener una ubicación específica por su ID
  // Responde a la ruta GET /ubicacion_contribuyente/:n_id
  async getUbicacionById(req, res) {
    const { n_id } = req.params;
    try {
      const data = await ubicacionService.getUbicacionById(n_id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para crear una nueva ubicación de contribuyente
  // Responde a la ruta POST /ubicacion_contribuyente
  async createUbicacion(req, res) {
    try {
      const data = await ubicacionService.createUbicacion(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para actualizar una ubicación existente
  // Responde a la ruta PUT /ubicacion_contribuyente/:n_id
  async updateUbicacion(req, res) {
    const { n_id } = req.params;
    try {
      const data = await ubicacionService.updateUbicacion(n_id, req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Método para eliminar una ubicación por su ID
  // Responde a la ruta DELETE /ubicacion_contribuyente/:n_id
  async deleteUbicacion(req, res) {
    const { n_id } = req.params;
    try {
      const data = await ubicacionService.deleteUbicacion(n_id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
