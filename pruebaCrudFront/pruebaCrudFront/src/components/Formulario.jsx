// src/components/Formulario.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import axios from 'axios';

export default function Formulario() {
    const navigate = useNavigate(); 
  const [persona, setPersona] = useState({
    nombre: '',
    apellido: '',
    direccion : '',
    telefono: '',
  });

  const { id } = useParams();  

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/persona/${id}`)
        .then(response => {
          setPersona(response.data); 
        })
        .catch(error => {
          console.error('Error fetching persona for editing', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersona({
      ...persona,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:8080/api/persona/modificar/${id}`, persona)
        .then(() => {
          alert('Persona modificada correctamente');
          navigate('/');  
        })
        .catch((error) => {
          console.error('Error modifying persona', error);
          alert('Error al modificar la persona');
        });
    } else {
      axios.post('http://localhost:8080/api/persona/guardar', persona)
        .then(() => {
          alert('Persona agregada correctamente');
          navigate('/'); 
        })
        .catch((error) => {
          console.error('Error saving persona', error);
          alert('Error al agregar la persona');
        });
    }
  };

  return (
    <div>
      <h2>{id ? 'Modificar Persona' : 'Agregar Persona'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={persona.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido</label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={persona.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Direccion</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            name="direccion"
            value={persona.direccion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Telefono</label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={persona.telefono}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">{id ? 'Modificar' : 'Agregar'}</button>
      </form>
    </div>
  );
}
