import {tPropiaService} from '../../services/proximidadCompetencia/tPropiaService.js';

const tPropia = new tPropiaService();

export class tPropiaController {
    constructor() { }

    async getTiendasPropias(req, res) {
        try {
            const data = await tPropia.getTiendasPropias();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTPropiabyId(req, res) {
        //Agregamos un const con el elemento que usaremos
        const { id } = req.params;
        
        try {
            const data = await tPropia.getTPropiabyId(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTPropiabyCodClie (req, res) {
        const {  c_CodClie } = req.params;

        try {
            const data = await tPropia.getTPropiabyCodClie(c_CodClie);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getConsultas (req, res) {
        try {
            const data = await tPropia.getConsultas();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}