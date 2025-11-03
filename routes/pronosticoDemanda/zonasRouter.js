import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import {tZonasController} from '../../controllers/pronosticoDemanda/zonasController.js';

export const createTZonasRouter = () => {
    const tZonasRouter = Router();
    const tzonasController = new tZonasController();

    // Consultas del archivo js del Controller
    tZonasRouter.get("/", tzonasController.getZonas);
    tZonasRouter.get("/search_id_zonas/:id", tzonasController.getZonasbyID);
    tZonasRouter.get("/zona/:c_nombre_zona", tzonasController.getZonasbyNombre);

    return tZonasRouter;
}