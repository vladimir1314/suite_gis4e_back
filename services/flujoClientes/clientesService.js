import FlujoClientes from "../../models/flujoClientes/flujo.js";

export class ClientesService {
  async getFlujos() {
    try {
      const data = await FlujoClientes.findAll();
      return data;
    } catch (error) {
      console.error("Error en getFlujos:", error);
      throw new Error("Error al obtener los flujos de clientes.");
    }
  }

  async getFlujoById(id) {
    try {
      const data = await FlujoClientes.findByPk(id);
      if (!data) {
        throw new Error("Flujo de cliente no encontrado.");
      }
      return data;
    } catch (error) {
      console.error(`Error en getFlujoById(${id}):`, error);
      throw error;
    }
  }

  async createFlujo(flujoData) {
    try {
      const data = await FlujoClientes.create(flujoData);
      return data;
    } catch (error) {
      console.error("Error en createFlujo:", error);
      throw new Error("Error al crear el flujo de cliente.");
    }
  }

  async updateFlujo(id, flujoData) {
    try {
      const [updatedRows] = await FlujoClientes.update(flujoData, {
        where: { id },
      });
      if (updatedRows === 0) {
        throw new Error("Flujo de cliente no encontrado para actualizar.");
      }
      return { message: "Flujo de cliente actualizado correctamente." };
    } catch (error) {
      console.error(`Error en updateFlujo(${id}):`, error);
      throw error;
    }
  }

  async deleteFlujo(id) {
    try {
      const deletedRows = await FlujoClientes.destroy({
        where: { id },
      });
      if (deletedRows === 0) {
        throw new Error("Flujo de cliente no encontrado para eliminar.");
      }
      return { message: "Flujo de cliente eliminado correctamente." };
    } catch (error) {
      console.error(`Error en deleteFlujo(${id}):`, error);
      throw error;
    }
  }
}
