// middleware/conexionCliente.js
import { getConexionPorCliente } from '../config/postgres/clientConnections.js';

export async function withClienteConnection(req, res, next) {
  console.log("🧩 Middleware llamado");
  const id_cliente = parseInt(req.headers['x-id-cliente']);
  
  // Si no hay id_cliente, continuar sin establecer conexión
  if (isNaN(id_cliente) || !id_cliente) {
    console.log("⚠️ Middleware: No se encontró id_cliente, continuando sin conexión");
    return next();
  }

  // console.log("🧩 Middleware: ID del cliente recibido:", id_cliente);

  try {
    const {clienteWorkspace, clienteBaseDatos, nuevaConexion} = await getConexionPorCliente(id_cliente);
    req.dbCliente = nuevaConexion;
    req.clienteWorkspace = clienteWorkspace; // Guarda el workspace del cliente en la request
    req.clienteBaseDatos = clienteBaseDatos; // Guarda la base de datos del cliente en la request
    console.log("✅ Middleware: Conexión establecida para cliente", id_cliente);
    next(); // << importante
  } catch (err) {
    console.log("❌ Middleware: Error al obtener conexión del cliente", err);
    return res.status(500).json({ error: 'Error de conexión con cliente' });
  }
}