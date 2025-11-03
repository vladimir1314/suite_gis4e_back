import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import {tDatosSocioEconController} from '../../controllers/pronosticoDemanda/datosSocioeconomicosController.js';

export const createTDatosSocioEconRouter = () => {
    const tDatosSocioEconRouter = Router();
    const tdatosSocioEconController = new tDatosSocioEconController();

    // Consultas del archivo js del Controller
    tDatosSocioEconRouter.get("/", tdatosSocioEconController.getDatosSocioEcon);
    tDatosSocioEconRouter.get("/search_id_datos/:id_datos", tdatosSocioEconController.getDatosSocioEconbyID);
    tDatosSocioEconRouter.get("/subzona/:id_subzona", tdatosSocioEconController.getDatosSocioEconbyIDsubZona);

    return tDatosSocioEconRouter;
}