import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export class DistritosService {
  async getAll() {
    const filePath = path.join(__dirname, 'lima_distritos.geojson');
    try {
      const data = await fs.readFile(filePath, 'utf-8');
      const geojson = JSON.parse(data);
      const districtNames = [...new Set(geojson.features.map(f => f.properties.DISTRITO))].sort();
      return {
        districts: geojson.features,
        districtNames: districtNames
      };
    } catch (error) {
      console.error('Error reading or parsing lima_distritos.geojson:', error);
      throw new Error('Could not load district data.');
    }
  }
}
