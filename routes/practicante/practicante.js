import { Router } from "express";
import { validarToken } from "../../middlewares/auth.js";
import { PracticanteController } from "../../controllers/practicante/practicante.js";
import { get } from "http";

export const createPracticanteRouter = () => {
  const practicanteRouter = Router();
  const practicanteController = new PracticanteController();

  // **Practicantes
  practicanteRouter.get("/", practicanteController.getPracticantes);
  practicanteRouter.get("/search_by_id/:id", practicanteController.getPracticantebyId);
  practicanteRouter.get("/nombre/:c_nombre", practicanteController.getPracticantebyName);
  practicanteRouter.post("/", practicanteController.postPracticantes);
  practicanteRouter.put("/:id", practicanteController.putPracticantesbyId);
  practicanteRouter.delete("/:id", practicanteController.deletePracticantesbyId);
  practicanteRouter.get("/consulta/conteo/", practicanteController.deletePracticantesbyId);

  return practicanteRouter;
};