import { Router } from "express";

import { ContribuyenteController } from "../../controllers/satgisPracticante/contribuyenteController.js";

export const createContribuyenteRouter = () => {
  const router = Router();

  const controller = new ContribuyenteController();
  
  router.get("/", controller.getContribuyentes);
  router.get("/search_by_id/:c_num_documento", controller.getContribuyenteById);
  router.post("/", controller.createContribuyente);
  router.put("/:c_num_documento", controller.updateContribuyente);
  router.delete("/:c_num_documento", controller.deleteContribuyente);

  return router;
};
