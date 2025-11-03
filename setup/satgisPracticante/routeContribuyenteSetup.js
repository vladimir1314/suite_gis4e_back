import { createContribuyenteRouter } from "../../routes/satgisPracticante/contribuyenteRoutes.js";

export function setupContribuyenteRoutes(app) {
    const routers = {
        contribuyentes: createContribuyenteRouter(),
    };

    for (const [ruta, router] of Object.entries(routers)) {
        app.use(`/example/${ruta}`, router);
    }
}
