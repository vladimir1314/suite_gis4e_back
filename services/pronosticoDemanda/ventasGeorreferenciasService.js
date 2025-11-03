import { Op } from "sequelize";
import ventasGeorref from "../../models/pronosticoDemanda/ventasGeorreferencias.js";
import { sequelize } from "../../config/postgres/sequelize.js";

export class VentasGeorrefService {

    async getventasGeorref(){
        try {
            const data = await ventasGeorref.findAll();
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getventasGeorrefbyID( id_venta ){
        try {
            const data = await ventasGeorref.findByPk(id_venta);
            return data;
        } catch (error) {
            console.log(error);
            throw new Error("Error al obtener el servicio.");
        }
    }

    async getventasGeorrefbyIDTienda(id_tienda) {
        try {
            const data = await ventasGeorref.findAll(
                {
                    where:{
                        // Búsqueda exacta del producto.
                        id_tienda: id_tienda
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