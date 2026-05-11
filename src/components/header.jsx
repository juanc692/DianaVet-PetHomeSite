import React from 'react'
import logo from '../assets/dianaVetLogo.png'

export default function header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark p-3" style={{ backgroundColor: '#F3F3F3' }}>
      <div className="container-fluid">
        {/* Logo / Nombre */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img 
            src={logo} 
            alt="Logo" 
            width="100"
            className="d-inline-block align-text-top me-2"
          />
          {/* VeterinaryVet */}
        </a>

        {/* Botón para móviles (Hamburguesa) */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="navbar-nav ms-auto">
            <button className="btn btn-outline-info text-black btn-link nav-link">Inicio</button>
            <button className="btn btn-outline-info text-black btn-link nav-link">Servicios</button>
            <button className="btn btn-outline-info text-black btn-link nav-link">Productos</button>
            <button className="btn btn-outline-info text-black btn-link nav-link">Contacto</button>
          </div>
        </div>
      </div>
    </nav>     
    </>
  )
}
