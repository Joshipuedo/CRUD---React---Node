import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api'
});

export const getItems = async () => {
    const response = await api.get('/items');
    return response.data;
};


export const createItem = async (item) => {
    const response = await api.post('/items', item);
    return response.data;    
};

export const updateItem = async (id, item) => {
    const response = await api.put(`/items/${id}`);
    return response.data;
};

export const deleteItem = async (id) => {
    const response = await api.delete(`/items/${id}`);
};


