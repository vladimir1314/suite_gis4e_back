import { Router } from "express";
import { UbicacionContribuyenteController } from "../../controllers/satgisPracticante/ubicacionContribuyenteController.js";

export const createUbicacionContribuyenteRouter = () => {
  const router = Router();
  const controller = new UbicacionContribuyenteController();

  // Rutas CRUD
  router.get("/", controller.getUbicaciones);
  router.get("/:n_id", controller.getUbicacionById);       // ⚡ usar n_id
  router.post("/", controller.createUbicacion);
  router.put("/:n_id", controller.updateUbicacion);       // ⚡ usar n_id
  router.delete("/:n_id", controller.deleteUbicacion);    // ⚡ usar n_id

  return router;
};
