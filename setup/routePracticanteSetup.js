import { createPracticanteRouter } from "../routes/practicante/practicante.js";

export function setupPracticanteRoutes(app) {
    const practicanteRouter = createPracticanteRouter();
    app.use('/api/practicante', practicanteRouter);
    app.use('/', practicanteRouter);
    app.use('/search_by_id/:id', practicanteRouter);
    app.use('/nombre/:nombres', practicanteRouter);
    app.use('/:id', practicanteRouter)
    app.use('/consulta/conteo/', practicanteRouter);
    

}