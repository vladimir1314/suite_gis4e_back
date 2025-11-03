import { Router } from "express";
import { ClientesController } from "../../controllers/flujoClientes/clientes.js";

export const createFlujoClienteRouter = () => {
  const flujoClienteRouter = Router();
  const clientesController = new ClientesController();

  flujoClienteRouter.get("/", (req, res) => clientesController.getFlujos(req, res));
  flujoClienteRouter.get("/:id", (req, res) => clientesController.getFlujoById(req, res));
  flujoClienteRouter.post("/", (req, res) => clientesController.createFlujo(req, res));
  flujoClienteRouter.put("/:id", (req, res) => clientesController.updateFlujo(req, res));
  flujoClienteRouter.delete("/:id", (req, res) => clientesController.deleteFlujo(req, res));

  return flujoClienteRouter;
};
