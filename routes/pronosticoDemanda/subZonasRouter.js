import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import {tsubZonasController} from '../../controllers/pronosticoDemanda/subZonasController.js';

export const createTsubZonasRouter = () => {
    const tsubZonasRouter = Router();
    const tsubzonasController = new tsubZonasController();

    // Consultas del archivo js del Controller
    tsubZonasRouter.get("/", tsubzonasController.getsubZonas);
    tsubZonasRouter.get("/id_subzona/:id", tsubzonasController.getsubZonasbyID);
    tsubZonasRouter.get("/subzona/:c_nombre_subzona", tsubzonasController.getsubZonasbyNombre);

    return tsubZonasRouter;
}