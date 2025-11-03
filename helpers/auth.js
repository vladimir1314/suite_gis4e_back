import "dotenv/config";
import jwt from "jsonwebtoken";

export function generarToken(usuario, expiredIn = "1d") {
  const payload = {
    id_usuario: usuario.id_usuario,
    id_cliente: usuario.id_cliente,
    id_rol: usuario.id_rol ?? 0,
    n_nivel_acceso: usuario.n_nivel_acceso,
    id_sistema: usuario.id_sistema
  };

  const opciones = {
    expiresIn: expiredIn,
  };

  const opcionesRefresh = {
    expiresIn: "3d",
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, opciones);
  const refresToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_KEY, opcionesRefresh);
  const tokenDecoded = jwt.decode(accessToken);

  const expiracionToken = tokenDecoded.exp;

  return { accessToken, refresToken, expiracionToken };
}

export function refreshTokenUser(usuario, expiredIn = "7d") {
  const payload = {
    id_usuario: usuario.id_usuario,
    id_cliente: usuario.id_cliente,
    id_rol: usuario.id_rol ?? 0,
    n_nivel_acceso: usuario.n_nivel_acceso,
    id_sistema: usuario.id_sistema
  };

  const opciones = {
    expiresIn: expiredIn,
  };

  const token = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN_KEY, opciones);

  return token;
}


export function generarTokenVerificacion(payload) {
  const opciones = {
    expiresIn: "15m",
  }

  return jwt.sign(payload, process.env.JWT_SECRET_KEY, opciones);
}

export function getTokenData(token) {
  let data = null;

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if(err) {
          console.log('Error al obtener data del token');
      } else {
          data = decoded;
      }
  });

  return data;
}
