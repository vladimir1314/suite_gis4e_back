import {subZonasService} from '../../services/pronosticoDemanda/subZonasService.js';

const tsubZonasService = new subZonasService();

export class tsubZonasController {
    constructor() { }

    async getsubZonas(req, res) {
        try {
            const data = await tsubZonasService.getsubZonas();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getsubZonasbyID(req, res) {
        const { id_subzona } = req.params;
        
        try {
            const data = await tsubZonasService.getsubZonasbyID(id_subzona);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getsubZonasbyNombre (req, res) {
        const {  c_nombre_subzona } = req.params;

        try {
            const data = await tsubZonasService.getsubZonasbyNombre(c_nombre_subzona);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}