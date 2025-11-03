import { Op } from "sequelize";
import Contribuyente from "../../models/satgisPracticante/contribuyente.js";

export class ContribuyenteService {

  async getContribuyentes() {
    try {
      return await Contribuyente.findAll();
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener contribuyentes.");
    }
  }

  async getContribuyenteById(c_num_documento) {
    try {
      return await Contribuyente.findByPk(c_num_documento);
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener contribuyente por ID.");
    }
  }

  async createContribuyente({
    c_num_documento,
    c_tipo_documento,
    c_tipo_contribuyente,
    c_nombre,
    c_condicion_especial,
    c_telefono,
    c_correo_electronico
  }) {
    try {
      return await Contribuyente.create({
        c_num_documento,
        c_tipo_documento,
        c_tipo_contribuyente,
        c_nombre,
        c_condicion_especial,
        c_telefono,
        c_correo_electronico
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear contribuyente.");
    }
  }

  async updateContribuyente(c_num_documento, {
    c_tipo_documento,
    c_tipo_contribuyente,
    c_nombre,
    c_condicion_especial,
    c_telefono,
    c_correo_electronico
  }) {
    try {
      return await Contribuyente.update({
        c_tipo_documento,
        c_tipo_contribuyente,
        c_nombre,
        c_condicion_especial,
        c_telefono,
        c_correo_electronico
      }, {
        where: { c_num_documento }
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar contribuyente.");
    }
  }

  async deleteContribuyente(c_num_documento) {
    try {
      return await Contribuyente.destroy({
        where: { c_num_documento }
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar contribuyente.");
    }
  }
}
