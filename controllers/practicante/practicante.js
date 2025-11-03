import { PracticanteService } from "../../services/practicante/practicanteService.js";

const practicanteService = new PracticanteService();

export class PracticanteController {
  constructor() { }

  async getPracticantes(req, res) {
    try {
      const data = await practicanteService.getPracticantes();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPracticantebyId(req, res) {
    const { id } = req.params;
    try {
      const data = await practicanteService.getPracticantebyId(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getPracticantebyName(req, res) {
    const { c_nombre } = req.params;
    try {
      const data = await practicanteService.getPracticantebyName(c_nombre);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

/*PENDIENTE CONFIGURAR CONSULTA SEQUELIZE*/
  async getConsultas(req, res) {
    try {
      const data = await practicanteService.getConsultas();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async postPracticantes(req, res) {
    try {
      const data = await practicanteService.postPracticantes(req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async putPracticantesbyId(req, res) {
    const { id } = req.params;
    try {
      const data = await practicanteService.putPracticantesbyId(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

   async deletePracticantesbyId(req, res) {
    const { id } = req.params;
    try {
      const data = await practicanteService.deletePracticantesbyId(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

}
