import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Hyperium</a>
        <div class="navbar-nav navlinks">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          <a class="nav-link" href="#">Promociones</a>
          <a class="nav-link" href="#">Catalogo</a>
          <a class="nav-link" href='#'>Contacto</a>
        </div>
      </div>
  </nav>
  )
}

export default Navbar