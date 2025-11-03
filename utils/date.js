// Función auxiliar para obtener la fecha y hora de Perú en formato YYYY-MM-DD HH:mm:ss
export const getFechaHoraPeru = () => {
  const date = new Date();
  date.setUTCHours(date.getUTCHours() - 5);
  const pad = (n) => n.toString().padStart(2, "0");
  return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(
    date.getUTCDate()
  )} ${pad(date.getUTCHours())}:${pad(date.getUTCMinutes())}:${pad(
    date.getUTCSeconds()
  )}`;
};
