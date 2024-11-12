import React, { useState, useEffect } from 'react';

const ServiceForm = ({ addService, serviceToEdit, updateService, editIndex }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (serviceToEdit) {
      setName(serviceToEdit.name);
      setDescription(serviceToEdit.description);
      setPrice(serviceToEdit.price);
    }
  }, [serviceToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && price) {
      const newService = { name, description, price };
      if (editIndex !== null) {
        updateService(newService, editIndex);
      } else {
        addService(newService);
      }
      setName('');
      setDescription('');
      setPrice('');
    } else {
      alert('All fields are required');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editIndex !== null ? 'Edit Service' : 'Add New Service'}</h2>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">{editIndex !== null ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ServiceForm;
