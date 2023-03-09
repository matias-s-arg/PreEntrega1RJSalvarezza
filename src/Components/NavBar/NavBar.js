import React from "react";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
        <h5 class=" fw-bold fs-2 p-3 mb-2 bg-dark-subtle text-emphasis-dark">MI_TIENDA</h5>
        <li className="nav-item dropdown">
          <a className="navbar-brand dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Audio y TV
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Smart TV</a></li>
            <li><a className="dropdown-item" href="#">Parlantes</a></li>
            <li><a className="dropdown-item" href="#">Auriculares</a></li>
            <li><a className="dropdown-item" href="#">Microfonos</a></li>

          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="navbar-brand dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Informática
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Notebooks</a></li>
            <li><a className="dropdown-item" href="#">Tablets</a></li>
            <li><a className="dropdown-item" href="#">PCs</a></li>
            <li><a className="dropdown-item" href="#">Monitores</a></li>
            <li><a className="dropdown-item" href="#">Accesorios y varios</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="navbar-brand dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Celulares
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Smartphones</a></li>
            <li><a className="dropdown-item" href="#">Fundas</a></li>
            <li><a className="dropdown-item" href="#">Accesorios</a></li>
          </ul>
        </li>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-dark" type="submit">Search</button>
        </form>

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <a className="navbar-brand" >Compras</a>
      <span className="navbar-toggler-icon"></span>
      
    </button>
    

    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Compras</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ingresar
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="#">Login</a></li>
              <li><a className="dropdown-item" href="#">Registrarse</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Ver Carrito</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sucursales</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>

          
        </ul>

      </div>
    </div>
  </div>
</nav>


            
        {/* <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameName="container-fluid">
            <a classNameName="navbar-brand" href="#">Navbar</a>
            
            <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span classNameName="navbar-toggler-icon"></span>
            </button>
            <div classNameName="collapse navbar-collapse" id="navbarNavDropdown">
            <ul classNameName="navbar-nav">
                <li classNameName="nav-item">
                <a classNameName="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">Features</a>
                </li>
                <li classNameName="nav-item">
                <a classNameName="nav-link" href="#">Pricing</a>
                </li>
                <li classNameName="nav-item dropdown">
                <a classNameName="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                </a>
                <ul classNameName="dropdown-menu">
                    <li><a classNameName="dropdown-item" href="#">Action</a></li>
                    <li><a classNameName="dropdown-item" href="#">Another action</a></li>
                    <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav> */}
        </>
    )
}

export default NavBar;