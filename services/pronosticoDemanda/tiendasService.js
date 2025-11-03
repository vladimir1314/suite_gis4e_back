import { Op } from "sequelize";
import tiendas from "../../models/pronosticoDemanda/tiendas.js";
import subZonas from "../../models/pronosticoDemanda/subzonas.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class tiendasService {

    async getTiendas(){
        try {
            const data = await tiendas.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getTiendasbyID( id_tienda ){
        try {
            const data = await tiendas.findByPk(id_tienda);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getTiendasbyNombre(c_nombre_tienda){
        try {
            const data = await tiendas.findAll(
                {
                    where:{
                        c_nombre_tienda: c_nombre_tienda
                        
                    }
                }
            );

            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    //Funcion encargada de filtrar las tiendas dentro de las subzonas
    async getTiendasbySubZona(id_subzona){
        
        try {
            //Obtener el polígono de la subzona
            const subzona = await subZonas.findByPk(id_subzona, {
                attributes: ['geom']
            });

            if (!subzona) {
                throw new Error('Subzona no encontrada');
            }

            //Obtener las tiendas que se encuentren dentro del polígono de la subzona
            const data = await tiendas.findAll({
                where: sequelize.where(
                    sequelize.fn('ST_Within', sequelize.col('tienda.geom'), subzona.geom))
            });
            return data;



            return data;
        }   catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }
        
}