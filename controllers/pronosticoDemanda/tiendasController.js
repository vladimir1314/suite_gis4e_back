import {tiendasService} from '../../services/pronosticoDemanda/tiendasService.js';

const tTiendasService = new tiendasService();

export class tTiendasController {
    constructor() { }

    async getTiendas(req, res) {
        try {
            const data = await tTiendasService.getTiendas();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTiendasbyID(req, res) {
        const { id_tienda } = req.params;
        
        try {
            const data = await tTiendasService.getTiendasbyID(id_tienda);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTiendasbyNombre (req, res) {
        const {  c_nombre_tienda } = req.params;

        try {
            const data = await tTiendasService.getTiendasbyNombre(c_nombre_tienda);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getTiendasbySubZona(req, res) {
        const { id_subzona } = req.params;
        
        try {
            const data = await tTiendasService.getTiendasbySubZona(id_subzona);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}