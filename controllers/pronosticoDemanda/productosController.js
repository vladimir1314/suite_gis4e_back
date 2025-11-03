import {productosService} from '../../services/pronosticoDemanda/productosService.js';

const tProductosService = new productosService();

export class tProductosController {
    constructor() { }

    async getProductos(req, res) {
        try {
            const data = await tProductosService.getProductos();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductosbyID(req, res) {
        const { id_producto } = req.params;
        
        try {
            const data = await tProductosService.getProductosbyID(id_producto);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProductosbyNombre (req, res) {
        const {  c_nombre_producto } = req.params;

        try {
            const data = await tProductosService.getProductosbyNombre(c_nombre_producto);
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}