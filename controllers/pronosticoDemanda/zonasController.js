import {zonasService} from '../../services/pronosticoDemanda/zonasService.js';

const tZonasService = new zonasService();

export class tZonasController {
    constructor() { }

    async getZonas(req, res) {
        try {
            const data = await tZonasService.getZonas();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getZonasbyID(req, res) {
        //Agregamos un const con el elemento que usaremos
        const { id } = req.params;
        
        try {
            const data = await tZonasService.getZonasbyID(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getZonasbyNombre (req, res) {
        const {  c_nombre_zona } = req.params;

        try {
            const data = await tZonasService.getZonasbyNombre(c_nombre_zona);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}