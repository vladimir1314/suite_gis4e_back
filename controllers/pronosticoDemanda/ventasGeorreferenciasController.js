import {VentasGeorrefService} from '../../services/pronosticoDemanda/ventasGeorreferenciasService.js';

const tVentasGeorref = new VentasGeorrefService();

export class tVentasGeorrefController {
    constructor() { }

    async getventasGeorref(req, res) {
        try {
            const data = await tVentasGeorref.getventasGeorref();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getventasGeorrefbyID(req, res) {
        //Agregamos un const con el elemento que usaremos
        const { id_venta } = req.params;
        
        try {
            const data = await tVentasGeorref.getventasGeorrefbyID(id_venta);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getventasGeorrefbyIDTienda (req, res) {
        const {  id_tienda } = req.params;

        try {
            const data = await tVentasGeorref.getventasGeorrefbyIDTienda(id_tienda);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}