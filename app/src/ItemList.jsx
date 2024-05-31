import React, { useState, useEffect } from 'react';
import { getItems, createItem, updateItem, deleteItem } from './api';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', description: '' });

    useEffect(() => {
        const fetchItems = async () => {
            const items = await getItems();
            setItems(items);
        };
        fetchItems();
    }), [];

    const handleCreate = async () => {
        const createdItem = await createItem(newItem);
        setItems([...items, createdItem]);
    };

    const handleUpdate = async (id) => {
        const updatedItem = await updatedItem(id, newItem);
        setItems(items.map(item => item._id === id ? updatedItem : item));
    };

    const handleDelete = async (id) => {
        await deleteItem(id);
        setItems(items.filter(item => item._id !== id));
    };

    return (
        <div>
            <h1> Item List </h1>
            <input 
                type='text'
                placeholder='Name'
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value})}
            />
            <input 
                type='text'
                placeholder='Description'
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value})}
            />
            <button onClick={handleCreate}>Crear</button>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => handleUpdate(item._id)}>Actualizar</button>
                        <button onClick={() => handleDelete(item._id)}>Borrar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;