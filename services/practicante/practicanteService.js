import { Op } from "sequelize";
import Practica from "../../models/practicante/practicante.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class PracticanteService {

  async getPracticantes() {
    try {
      const data = await Practica.findAll();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.");
    }
  }

  async getPracticantebyId( id ) {
    try {
      const data = await Practica.findByPk(id);

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.");
    }
  }

  async getPracticantebyName( c_nombre ) {
    try {
      const data = await Practica.findOne(
        {
            where:{
                c_nombre: {
                    [Op.iLike]: '%' + c_nombre + '%'
                }
            }
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.");
    }
  }

  async getConsultas() {
    try {
      const data = await sequelize
      ;

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.");
    }
  }

  async postPracticantes({c_nombre, n_edad, b_activo, d_fecha}) {
    try {
      const data = await Practica.create(
        {
            c_nombre, n_edad, b_activo, d_fecha
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.", error);
    }
  }

  async putPracticantesbyId(id, {c_nombre, n_edad, b_activo, d_fecha}) {
    try {
      const data = await Practica.update(
        {
            c_nombre, n_edad, b_activo, d_fecha
        },
        {
            where: {
                id
            }
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.", error);
    }
  }

  async deletePracticantesbyId(id) {
    try {
      const data = await Practica.destroy(
        {
            where: {
                id
            }
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.", error);
    }
  }
}