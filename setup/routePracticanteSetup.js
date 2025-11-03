import { createPracticanteRouter } from "../routes/practicante/practicante.js";

export function setupPracticanteRoutes(app) {
    const maestrosRutas = {
        practicante: createPracticanteRouter(),
    };

    for (const [ruta, router] of Object.entries(maestrosRutas)) {
        app.use(`/example/${ruta}`, router);
    }
}