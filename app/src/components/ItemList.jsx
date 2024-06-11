import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = ({onEdit}) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('mongodb+srv://josirmatortolero:zmnl42ZKlQLz9Ndj@cluster0.qhnksqc.mongodb.net/CRUD-REACT-NODE/items')
            setItems(response.data);
        } catch (error){
            console.error('Error fetching items:', error);
        }
    };

    const handleDelete = async (id) => {
        try{
            await axios.delete(`mongodb+srv://josirmatortolero:zmnl42ZKlQLz9Ndj@cluster0.qhnksqc.mongodb.net/CRUD-REACT-NODE/items/${id}`);
            fetchItems();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    return (
        <div>
            <h1> Lista de objetos </h1>
            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.name}: {item.description}
                        <button onClick={() => onEdit(item)}>Editar</button>
                        <button onClick={() => handleDelete(item._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;