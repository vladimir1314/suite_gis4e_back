import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import {tProductosController} from '../../controllers/pronosticoDemanda/productosController.js';

export const createTProductosRouter = () => {
    const tProductosRouter = Router();
    const tproductosController = new tProductosController();

    // Consultas del archivo js del Controller
    tProductosRouter.get("/", tproductosController.getProductos);
    tProductosRouter.get("/id_producto/:id_producto", tproductosController.getProductosbyID);
    tProductosRouter.get("/producto/:c_nombre_producto", tproductosController.getProductosbyNombre);

    return tProductosRouter;
}