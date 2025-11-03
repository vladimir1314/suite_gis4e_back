import { createTZonasRouter}  from "../../routes/pronosticoDemanda/zonasRouter.js";
import { createTsubZonasRouter}  from "../../routes/pronosticoDemanda/subZonasRouter.js";
import { createTDatosSocioEconRouter } from "../../routes/pronosticoDemanda/datosSocioEconRouter.js";
import { createTtiendasRouter }  from "../../routes/pronosticoDemanda/tiendasRouter.js";
import { createTProductosRouter }  from "../../routes/pronosticoDemanda/productosRouter.js";
import { createTVentasGeorrefRouter } from "../../routes/pronosticoDemanda/ventasGeorrefRouter.js";

export function setupPronosticoDemandaRoutes(app) {
    const maestrosRutas = {
        tZonas: createTZonasRouter(),
        tSubZonas: createTsubZonasRouter(),
        tDatosSocioEcon: createTDatosSocioEconRouter(),
        tTiendas: createTtiendasRouter(),
        tProductos: createTProductosRouter(),
        tVentasGeorref: createTVentasGeorrefRouter(),
        
    };

    for (const [ruta, router] of Object.entries(maestrosRutas)) {
        app.use(`/example/${ruta}`, router);
    }
}