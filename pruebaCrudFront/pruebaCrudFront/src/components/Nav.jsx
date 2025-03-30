import { Link } from 'react-router-dom';


export default function Nav({onSearch}){

    const handlerBuscar = (e) =>{
        e.preventDefault();
        //davegar por el DOM
        const id = e.target.elements.searchId.value;
        onSearch(id);
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
                        <Link className="nav-link fs-4" to="/">traer personas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link fs-4" to="/agregar">Agregar Persona</Link>
                    </li>
                </ul>
                <form className="d-flex" role="search" onSubmit={handlerBuscar}>
                <input className="form-control me-2" type="search" placeholder="ID persona" name="searchId" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
                  </form>
            </div>
        </div>
    </nav>
    )
}