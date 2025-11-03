import { Op } from "sequelize";
import zonas from "../../models/pronosticoDemanda/zonas.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class zonasService {

    async getZonas(){
        try {
            const data = await zonas.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getZonasbyID( id ){
        try {
            const data = await zonas.findByPk(id);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getZonasbyNombre(c_nombre_zona){
        try {
            const data = await zonas.findAll(
                {
                    where:{
                        c_nombre_zona: {
                            [Op.iLike]: '%' + c_nombre_zona + '%'
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

}