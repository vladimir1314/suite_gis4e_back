import { createTPropiasRouter } from "../../routes/proximidadCompetencia/propia.js";
import { createTCompetenciasRouter } from "../../routes/proximidadCompetencia/competencia.js";

export function setupProximidadRoutes(app) {
    const maestrosRutas = {
        tpropia: createTPropiasRouter(),
        tcompetencia: createTCompetenciasRouter(),
    };

    for (const [ruta, router] of Object.entries(maestrosRutas)) {
        app.use(`/example/${ruta}`, router);
    }
}