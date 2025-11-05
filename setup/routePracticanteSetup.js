import { createPracticanteRouter } from "../routes/practicante/practicante.js";

export function setupPracticanteRoutes(app) {
    const practicanteRouter = createPracticanteRouter();
    app.use('/api/practicante', practicanteRouter);
}