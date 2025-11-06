import nodemailer from "nodemailer";
import handlebars from "handlebars";
import { welcomeTemplate } from "../libs/templates/welcome.js";
import "dotenv/config";
import { aceptarTemplate } from "../libs/templates/aceptar.js";
import { rechazaTemplate } from "../libs/templates/rechazar.js";
import { reseteoTemplate } from "../libs/templates/reseteo.js";
import { nuevoUsuarioTemplate } from "../libs/templates/usuario.js";
import { gmailDiarioTemplate } from "../libs/templates/gmailDiario.js";

import { compileVerifyEmailTemplate } from "../libs/templates/registroUsuario.js";
import { confirmTemplate } from "../libs/templates/confirm.js";
import { errorTemplate } from "../libs/templates/error.js";
import { compileCredentialsUserTemplate } from "../libs/templates/credencialesUsuario.js";
import { compileReceiptTemplate } from "../libs/templates/reciboIngresoResidente.js";

export async function sendMail({ to, name, subject, body, attachments }) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  console.log("SMTP_EMAIL:", SMTP_EMAIL, "\n SMTP_PASSWORD:", SMTP_PASSWORD);

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
      attachments,
    });
    console.log(sendResult);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export function compileVerifyEmail(c_nombres, token) {
  const emailTemplate = compileVerifyEmailTemplate(c_nombres, token);
  const template = handlebars.compile(emailTemplate);
  const htmlBody = template({ c_nombres, token });

  return htmlBody;
}

export function compileConfirmEmail() {
  const template = handlebars.compile(confirmTemplate);
  return template({});
}

export function compileErrorEmail() {
  const template = handlebars.compile(errorTemplate);
  return template({});
}

export function compileCredentialsUser(usuario, contrasena) {
  const emailTemplate = compileCredentialsUserTemplate(usuario, contrasena);
  const template = handlebars.compile(emailTemplate);
  const htmlBody = template({ usuario, contrasena });

  return htmlBody;
}

export function compileWelcomeTemplate(name) {
  const template = handlebars.compile(welcomeTemplate);
  const htmlBody = template({
    mensaje: name,
  });
  return htmlBody;
}

export function compileNuevoUsuarioTemplate(
  mensaje,
  nombres,
  cargo,
  email,
  tipoDocumento,
  numeroDocumento,
  telefono,
  mensajeDos
) {
  const template = handlebars.compile(nuevoUsuarioTemplate);
  const htmlBody = template({
    mensaje: mensaje,
    nombres: nombres,
    cargo: cargo,
    email: email,
    tipoDocumento: tipoDocumento,
    numeroDocumento: numeroDocumento,
    telefono: telefono,
    mensajeDos: mensajeDos,
  });
  return htmlBody;
}

export function compileGmailDiarioRegistro(
  titulo,
  mensaje,
  nombres,
  mensajeDos
) {
  const template = handlebars.compile(gmailDiarioTemplate);
  const htmlBody = template({
    titulo: titulo,
    mensaje: mensaje,
    servicios: nombres,
    mensajeDos: mensajeDos,
  });
  return htmlBody;
}

export function compileReseteoTemplate(password) {
  const template = handlebars.compile(reseteoTemplate);
  const htmlBody = template({
    password: password,
  });
  return htmlBody;
}

export function compileRechazaSolicitud(name) {
  const template = handlebars.compile(rechazaTemplate);
  const htmlBody = template({
    mensaje: name,
  });
  return htmlBody;
}

export function compileAceptaSolicitud(mensaje, rol, usuario, password) {
  const template = handlebars.compile(aceptarTemplate);
  const htmlBody = template({
    mensaje: mensaje,
    rol: rol,
    usuario: usuario,
    password: password,
  });
  return htmlBody;
}

//Servicio que
export function compileSendReceipt(ingreso) {
  // console.log("Ingreso recibo:", ingreso)
  const template = handlebars.compile(compileReceiptTemplate(ingreso));
  const htmlBody = template({
    nombre: ingreso.residente?.c_nombres || "",
    apellido: ingreso.residente?.c_apellidos || "",
    nro_recibo: ingreso.nro_recibo || "",
    fecha_comprobante: ingreso.c_fecha_comprobante || "",
    vivienda: `${ingreso.vivienda?.c_manzana || ""} - ${ingreso.vivienda?.c_lote || ""}`,
    monto: ingreso.n_monto || 0,
    c_archivo: ingreso.c_archivo || "",
    descripcion: ingreso.c_descripcion || "",
  });

  return htmlBody;
}
