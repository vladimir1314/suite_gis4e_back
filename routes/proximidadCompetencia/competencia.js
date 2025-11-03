import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import {tCompetenciaController} from '../../controllers/proximidadCompetencia/tCompetenciaController.js';

export const createTCompetenciasRouter = () => {
    const tcompetenciaRouter = Router();
    const tcompetenciaController = new tCompetenciaController();

    // Consultas del archivo js del Controller
    tcompetenciaRouter.get("/", tcompetenciaController.getTiendasCompetencia);
    tcompetenciaRouter.get("/search_id_competencia/:id", tcompetenciaController.getTCompetenciabyId);
    tcompetenciaRouter.get("/codcomp/:c_CodClie", tcompetenciaController.getTCompetenciabyCodComp);
    //tcompetenciaRouter.get("/consulta", tcompetenciaController.getConsultas);

    return tcompetenciaRouter;
}