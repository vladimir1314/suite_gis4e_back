import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import {tTiendasController} from '../../controllers/pronosticoDemanda/tiendasController.js';

export const createTtiendasRouter = () => {
    const tTiendasRouter = Router();
    const ttiendasController = new tTiendasController();

    // Consultas del archivo js del Controller
    tTiendasRouter.get("/", ttiendasController.getTiendas);
    tTiendasRouter.get("/id_tienda/:id_tienda", ttiendasController.getTiendasbyID);
    tTiendasRouter.get("/tienda/:c_nombre_tienda", ttiendasController.getTiendasbyNombre);
    tTiendasRouter.get("/tienda_subzona/:id_subzona", ttiendasController.getTiendasbySubZona);

    return tTiendasRouter;
}