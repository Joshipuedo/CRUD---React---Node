import axios from "axios";
import { useEffect, useState } from "react";

const ItemForm = ({ itemToEdit, onSave }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (itemToEdit) {
            setName(itemToEdit.name);
            setDescription(itemToEdit.description);
        }
    }, [itemToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const item = { name, description};

        try {
            if (itemToEdit) {
                await axios.put(`mongodb+srv://josirmatortolero:zmnl42ZKlQLz9Ndj@cluster0.qhnksqc.mongodb.net/CRUD-REACT-NODE/items/${itemToEdit._id}`, item);
            } else {
                await axios.post(`mongodb+srv://josirmatortolero:zmnl42ZKlQLz9Ndj@cluster0.qhnksqc.mongodb.net/CRUD-REACT-NODE/items`, item);
            }
            onSave();
            setName();
            setDescription();
        } catch (error) {
            console.error('Error saving item:', error);
        }
    };
    return (
        <div>
            <h2>{itemToEdit ? 'Edit Item' : 'Añadir objeto'}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Nombre" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input 
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default ItemForm;