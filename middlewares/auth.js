import "dotenv/config";

import jwt from "jsonwebtoken";

export function validarToken(req, res, next) {
  console.log('llegamos a token?');
  console.log('URL consultada:', req.originalUrl);
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ mensaje: "Formato de token inválido" });
  }
  const token = authHeader.substring(7);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = {
      id_usuario: decoded.id_usuario,
      id_cliente: decoded.id_cliente,
      id_rol: decoded.id_rol,
      n_nivel_accesos: decoded.n_nivel_accesos,
      id_sistema: decoded.id_sistema,
    };
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.log("Token expirado");
      return res.status(401).json({ mensaje: "Token expirado" });
    }
    return res.status(401).json({ mensaje: "Token inválido" });
  }
}

export function validarRefreshToken(req, res, next) {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).json({ mensaje: "Token no proporcionado" });
  }
  if (!authHeader.startsWith("Refresh ")) {
    return res.status(401).json({ mensaje: "Formato de token inválido" });
  }
  const token = authHeader.substring(8);
  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_KEY);
    req.user = {
      id_usuario: decoded.id_usuario,
      id_cliente: decoded.id_cliente,
      id_rol: decoded.id_rol,
      n_nivel_accesos: decoded.n_nivel_accesos,
      id_sistema: decoded.id_sistema,
    };
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: "Token inválido", error });
  }
}
