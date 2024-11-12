
import React from 'react';

const ServiceList = ({ services, onEdit, onDelete }) => (
  <div>
    <h2>Healthcare Services</h2>
    {services.length > 0 ? (
      services.map((service, index) => (
        <div key={index}>
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <p>Price: ${service.price}</p>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      ))
    ) : (
      <p>No services available.</p>
    )}
  </div>
);

export default ServiceList;
