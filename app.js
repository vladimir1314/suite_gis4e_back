import express from "express";
import { corsMiddleware } from "./middlewares/cors.js";
import "dotenv/config";

import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

import { setupPracticanteRoutes } from "./setup/routePracticanteSetup.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));
app.use(corsMiddleware());
app.use(express.static(path.join(__dirname, "")));

app.disable("x-powered-by");

setupPracticanteRoutes(app);

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
