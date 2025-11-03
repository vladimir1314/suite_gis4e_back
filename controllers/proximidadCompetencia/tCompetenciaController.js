import {tCompetenciaService} from '../../services/proximidadCompetencia/tCompetenciaService.js';

const tCompetencia = new tCompetenciaService();

export class tCompetenciaController {
    constructor() { }

    async getTiendasCompetencia(req, res) {
        try {
            const data = await tCompetencia.getTiendasCompetencia();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTCompetenciabyId(req, res) {
        //Agregamos un const con el elemento que usaremos
        const { id } = req.params;
        
        try {
            const data = await tCompetencia.getTCompetenciabyId(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTCompetenciabyCodComp (req, res) {
        const {  c_CodComp } = req.params;

        try {
            const data = await tCompetencia.getTCompetenciabyCodComp(c_CodComp);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getConsultas (req, res) {
        try {
            const data = await tCompetencia.getConsultas();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}