import { Op } from "sequelize";
import Propia from "../../models/proximidadCompetencia/propia.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class tPropiaService {

    async getTiendasPropias(){
        try {
            const data = await Propia.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getTPropiabyId( id ){
        try {
            const data = await Propia.findByPk(id);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getTPropiabyCodClie(c_CodClie){
        try {
            const data = await Propia.findOne(
                {
                    where:{
                        c_CodClie: {
                            [Op.iLike]: '%' + c_CodClie + '%'
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