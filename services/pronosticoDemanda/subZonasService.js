import { Op } from "sequelize";
import subZonas from "../../models/pronosticoDemanda/subzonas.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class subZonasService {

    async getsubZonas(){
        try {
            const data = await subZonas.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getsubZonasbyID( id_subzona ){
        try {
            const data = await subZonas.findByPk(id_subzona);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getsubZonasbyNombre(c_nombre_subzona){
        try {
            const data = await subZonas.findAll(
                {
                    where:{
                        c_nombre_subzona: c_nombre_subzona
                        
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