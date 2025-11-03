import { Op } from "sequelize";
import productos from "../../models/pronosticoDemanda/productos.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class productosService {

    async getProductos(){
        try {
            const data = await productos.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getProductosbyID( id_producto ){
        try {
            const data = await productos.findByPk(id_producto);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getProductosbyNombre(c_nombre_producto){
        try {
            const data = await productos.findAll(
                {
                    where:{
                        c_nombre_producto: c_nombre_producto
                        
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