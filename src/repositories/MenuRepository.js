import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Substitua pela URL da sua API

export default {
  async fetchMenuItems() {
    try {
      const response = await axios.get(`${API_URL}/api/carnes/getCarnes`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar itens do menu:', error);
      throw error;
    }
  }
};