import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
//Importar los controladores a utilizar
import {tPropiaController} from '../../controllers/proximidadCompetencia/tPropiaController.js';

export const createTPropiasRouter = () => {
    const tpropiaRouter = Router();
    const tpropiaController = new tPropiaController();

    // Consultas del archivo js del Controller
    tpropiaRouter.get("/", tpropiaController.getTiendasPropias);
    tpropiaRouter.get("/search_id_propia/:id", tpropiaController.getTPropiabyId);
    tpropiaRouter.get("/codclie/:c_CodClie", tpropiaController.getTPropiabyCodClie);
    //tpropiaRouter.get("/consulta", tpropiaController.getConsultas);

    return tpropiaRouter;
};