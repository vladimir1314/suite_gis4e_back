import { ClientesService } from "../../services/flujoClientes/clientesService.js";

const clientesService = new ClientesService();

export class ClientesController {
  constructor() {}

  async getFlujos(req, res) {
    try {
      const data = await clientesService.getFlujos();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getFlujoById(req, res) {
    const { id } = req.params;
    try {
      const data = await clientesService.getFlujoById(id);
      res.status(200).json(data);
    } catch (error) {
      if (error.message.includes("encontrado")) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  async createFlujo(req, res) {
    try {
      const data = await clientesService.createFlujo(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateFlujo(req, res) {
    const { id } = req.params;
    try {
      const data = await clientesService.updateFlujo(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      if (error.message.includes("encontrado")) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }

  async deleteFlujo(req, res) {
    const { id } = req.params;
    try {
      const data = await clientesService.deleteFlujo(id);
      res.status(200).json(data);
    } catch (error) {
      if (error.message.includes("encontrado")) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(500).json({ error: error.message });
      }
    }
  }
}