import { Op } from "sequelize";
import Practicante from "../../models/practicante/practicante.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class PracticanteService {

  async getPracticantes() {
    try {
      const data = await Practicante.findAll();

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.");
    }
  }

  async getPracticantebyId( id ) {
    try {
      const data = await Practicante.findByPk(id);

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.");
    }
  }

  async getPracticantebyName( nombres ) {
    try {
      const data = await Practicante.findOne(
        {
            where:{
                nombres: {
                    [Op.iLike]: `%${nombres}%`
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

  async postPracticantes({nombres, apellidos, dni, carrera, universidad}) {
    try {
      const data = await Practicante.create(
        {
            nombres, apellidos, dni, carrera, universidad
        }
      );

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Error al obtener el servicio.", error);
    }
  }

  async putPracticantesbyId(id, {nombres, apellidos, dni, carrera, universidad}) {
    try {
      const data = await Practicante.update(
        {
            nombres, apellidos, dni, carrera, universidad
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
      const data = await Practicante.destroy(
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