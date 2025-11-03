import {datosSocioEconService} from '../../services/pronosticoDemanda/datosSocioeconomicosService.js';

const tDatosSocioEconService = new datosSocioEconService();

export class tDatosSocioEconController {
    constructor() { }

    async getDatosSocioEcon(req, res) {
        try {
            const data = await tDatosSocioEconService.getDatosSocioEcon();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDatosSocioEconbyID(req, res) {
        const { id_datos } = req.params;
        
        try {
            const data = await tDatosSocioEconService.getDatosSocioEconbyID(id_datos);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDatosSocioEconbyIDsubZona (req, res) {
        const {  id_subzona } = req.params;

        try {
            const data = await tDatosSocioEconService.getDatosSocioEconbyIDsubZona(id_subzona);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}