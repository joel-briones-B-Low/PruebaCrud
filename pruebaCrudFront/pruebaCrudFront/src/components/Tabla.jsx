import { useEffect, useState } from "react";
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Link} from "react-router-dom";

export default function Tabla({ searchId }) {

    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        //ternario
        // si pasa el id por el search entonces se busca especifico en la api de persona/id
        // si no se busca todas las personas
        const url = searchId ? `http://localhost:8080/api/persona/${searchId}`
            : 'http://localhost:8080/api/persona/';
        axios.get(url)
            .then(response => {
                //agreagar personas al estado
                setPersonas(searchId ? [response.data] : response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [searchId])
    const handleEliminar = (id) => {
        axios.delete(`http://localhost:8080/api/persona/eliminar/${id}`)
            .then(() => {
                setPersonas(personas.filter(person => person.id !== id));
            })
            .catch(error => {
                console.error("Error deleting persona", error);
            });
    };

    
  const cuerpoAccion = (rowData) => {
   if (!rowData) {
    return <><h1>No existe esa persona</h1></>;
   }
    return (
      <>
        <Link to={`/modificar/${rowData.id}`}>
        <Button icon="pi pi-pencil" className="btn btn-warning m-1">Modificar</Button>
        </Link>
        <Button 
          icon="" 
          className="btn btn-danger btn-outline-danger text-white m-1" 
          onClick={() => handleEliminar(rowData.id)} 
        >Eliminar</Button>
      </>
    );
  };

  return (
    <div>
      <h2>Personas</h2>
      <DataTable value={personas} paginator rows={10} rowsPerPageOptions={[5, 10, 20]}>
        <Column field="nombre" header="Nombre" sortable />
        <Column field="apellido" header="Apellido"  />
        <Column field="direccion" header="Direccion"  />
        <Column field="telefono" header="Telefono"  />
        <Column body={cuerpoAccion} header="Acciones" />
      </DataTable>
    </div>
  );


}