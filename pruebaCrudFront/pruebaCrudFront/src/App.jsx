// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from "./components/Nav";
import Tabla from "./components/Tabla";
import Formulario from "./components/Formulario";
import { useState } from 'react';

function App() {
  const [searchId, setSearchId] = useState(null);

  const handleSearch = (id) => {
    setSearchId(id);  // Actualiza el estado de búsqueda
  };

  return (
    <div className='container'>

    <Router>
      <Nav onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Tabla searchId={searchId} />} />
        <Route path="/agregar" element={<Formulario />} />
        <Route path="/modificar/:id" element={<Formulario />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
