import { Op } from "sequelize";
import UbicacionContribuyente from "../../models/satgisPracticante/ubicacioncontribuyente.js";

export class UbicacionContribuyenteService {

  // Obtener todas las ubicaciones
  async getUbicaciones() {
    try {
      const data = await UbicacionContribuyente.findAll();
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener ubicaciones de contribuyentes.");
    }
  }

  // Obtener ubicación por ID
  async getUbicacionById(n_id) {
    try {
      const data = await UbicacionContribuyente.findByPk(n_id);
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener ubicación por ID.");
    }
  }

  // Crear nueva ubicación
  async createUbicacion({
    c_num_documento,
    c_departamento,
    c_provincia,
    c_distrito,
    c_codigo_via,
    c_tipo_via,
    c_nombre_via,
    c_nro_municipal,
    c_manzana,
    c_lote,
    c_sector,
    c_ubicacion,
    c_zona_predio,
    c_cod_hu,
    c_nombre_habilitacion,
    c_nombre_edificacion,
    c_nro_interior,
    c_sub_lote,
    c_grupo_residencial
  }) {
    try {
      const data = await UbicacionContribuyente.create({
        c_num_documento,
        c_departamento,
        c_provincia,
        c_distrito,
        c_codigo_via,
        c_tipo_via,
        c_nombre_via,
        c_nro_municipal,
        c_manzana,
        c_lote,
        c_sector,
        c_ubicacion,
        c_zona_predio,
        c_cod_hu,
        c_nombre_habilitacion,
        c_nombre_edificacion,
        c_nro_interior,
        c_sub_lote,
        c_grupo_residencial
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al crear ubicación de contribuyente.");
    }
  }

  // Actualizar ubicación existente
  async updateUbicacion(n_id, {
    c_num_documento,
    c_departamento,
    c_provincia,
    c_distrito,
    c_codigo_via,
    c_tipo_via,
    c_nombre_via,
    c_nro_municipal,
    c_manzana,
    c_lote,
    c_sector,
    c_ubicacion,
    c_zona_predio,
    c_cod_hu,
    c_nombre_habilitacion,
    c_nombre_edificacion,
    c_nro_interior,
    c_sub_lote,
    c_grupo_residencial
  }) {
    try {
      const data = await UbicacionContribuyente.update({
        c_num_documento,
        c_departamento,
        c_provincia,
        c_distrito,
        c_codigo_via,
        c_tipo_via,
        c_nombre_via,
        c_nro_municipal,
        c_manzana,
        c_lote,
        c_sector,
        c_ubicacion,
        c_zona_predio,
        c_cod_hu,
        c_nombre_habilitacion,
        c_nombre_edificacion,
        c_nro_interior,
        c_sub_lote,
        c_grupo_residencial
      }, {
        where: { n_id }
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al actualizar ubicación de contribuyente.");
    }
  }

  // Eliminar ubicación por ID
  async deleteUbicacion(n_id) {
    try {
      const data = await UbicacionContribuyente.destroy({
        where: { n_id }
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al eliminar ubicación de contribuyente.");
    }
  }
}
