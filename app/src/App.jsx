import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
  const [itemToEdit, setItemToEdit] = useState( null);

  const handleEdit = (item) => {
    setItemToEdit(item);
  };

  const handleSave = () => {
    setItemToEdit(null);
  };

  return (
      <div>
        <h1>CRUD APP</h1>
        <ItemForm itemToEdit={itemToEdit} onSave={handleSave} />
        <ItemList onEdit={handleEdit} />
      </div>
  );
}

export default App;