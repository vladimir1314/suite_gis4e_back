import { Op } from "sequelize";
import datosSocioEconomicos from "../../models/pronosticoDemanda/datosSocioeconomicos.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class datosSocioEconService {

    async getDatosSocioEcon(){
        try {
            const data = await datosSocioEconomicos.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getDatosSocioEconbyID( id_datos ){
        try {
            const data = await datosSocioEconomicos.findByPk(id_datos);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getDatosSocioEconbyIDsubZona(id_subzona){
        try {
            const data = await datosSocioEconomicos.findAll(
                {
                    where:{
                        id_subzona: id_subzona
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