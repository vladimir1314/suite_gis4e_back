import { createUbicacionContribuyenteRouter } from "../../routes/satgisPracticante/ubicacioncontribuyenteRoutes.js";

export function setupUbicacionContribuyenteRoutes(app) {
    const routers = {
        ubicacion_contribuyente: createUbicacionContribuyenteRouter(),
    };

    for (const [ruta, router] of Object.entries(routers)) {
        app.use(`/example/${ruta}`, router);
    }
}
