import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import {tVentasGeorrefController} from '../../controllers/pronosticoDemanda/ventasGeorreferenciasController.js';

export const createTVentasGeorrefRouter = () => {
    const tVentasGeorrefRouter = Router();
    const tventasGeorrefController = new tVentasGeorrefController();

    // Consultas del archivo js del Controller
    tVentasGeorrefRouter.get("/", tventasGeorrefController.getventasGeorref);
    tVentasGeorrefRouter.get("/search_id_ventas/:id_venta", tventasGeorrefController.getventasGeorrefbyID);
    tVentasGeorrefRouter.get("/id_tiendas/:id_tienda", tventasGeorrefController.getventasGeorrefbyIDTienda);

    return tVentasGeorrefRouter;
}