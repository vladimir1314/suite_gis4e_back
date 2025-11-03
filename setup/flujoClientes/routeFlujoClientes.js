import { createFlujoClienteRouter } from "../../routes/FlujoClientes/clientes.js";

export function setupFlujoClientesRoutes(app) {
    const maestrosRutas = {
        clientes: createFlujoClienteRouter(),
    };

    for (const [ruta, router] of Object.entries(maestrosRutas)) {
        app.use(`/flujo_clientes/${ruta}`, router);
    }
}