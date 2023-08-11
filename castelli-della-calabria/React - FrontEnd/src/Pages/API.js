import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/castellicalabria'; 

// Ottieni la lista dei castelli
export const getCastles = () => {
  return axios.get(`${API_BASE_URL}/castelli`);
};

// Crea un nuovo castello
export const createCastle = (newCastle) => {
  return axios.post(`${API_BASE_URL}/save`, newCastle);
};

// Aggiorna un castello esistente
export const updateCastle = (id, updatedCastle) => {
  return axios.put(`${API_BASE_URL}/updatecastelli/${id}`, updatedCastle);
};

// Elimina un castello
export const deleteCastle = (id) => {
  return axios.delete(`${API_BASE_URL}/delete/${id}`);
};
