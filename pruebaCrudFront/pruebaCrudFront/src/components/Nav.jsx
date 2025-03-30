import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Nav({onSearch}){

    //estado para el buscador 
    const [searchID, setSearchId] = useState("");



    const handlerBuscar = (e) =>{
        e.preventDefault();
        //davegar por el DOM
        const id = e.target.elements.searchId.value;
        onSearch(id);
        //limpiar el campo
        setSearchId('')
    }

    const habdlerTraerPersonas = () =>{
        setSearchId('')
        // al momneto de traer las personas el promp se pasa nulo para que no haya un error de que
        // cuando le pones algo al input de buscar y traes personas, la tabla se vuelve dependiete del mismo promp

        onSearch(null)
    }

    return (
        <nav className="navbar navbar-expand-md bg ">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand fs-3">Inicio</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
                aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarContent">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link className="nav-link fs-4" to="/"
                        onClick={habdlerTraerPersonas}>traer personas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-4" to="/agregar">Agregar Persona</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handlerBuscar}>
                <input className="form-control me-2" type="search" placeholder="ID persona" name="searchId" aria-label="Search"
                value={searchID}
                //cambio
                onChange={(e) => setSearchId(e.target.value)} // actualizar el estado al cambiar el input de valor
                />

                <button className="btn btn-outline-success" type="submit">Buscar</button>
                  </form>
            </div>
        </div>
    </nav>
    )
}