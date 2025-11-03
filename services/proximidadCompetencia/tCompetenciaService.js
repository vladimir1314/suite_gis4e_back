import { Op } from "sequelize";
import Competencia from "../../models/proximidadCompetencia/competencia.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class tCompetenciaService {

    async getTiendasCompetencia(){
        try {
            const data = await Competencia.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getTCompetenciabyId( id ){
        try {
            const data = await Competencia.findByPk(id);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getTCompetenciabyCodComp(c_CodComp){
        try {
            const data = await Competencia.findOne(
                {
                    where:{
                        c_CodComp: {
                            [Op.iLike]: '%' + c_CodComp + '%'
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
}