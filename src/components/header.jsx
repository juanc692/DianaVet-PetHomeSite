import React, { useState } from 'react' // 1. Importamos useState
import logo from '../assets/dianaVetLogo.png'

export default function Header() {
  // 2. Estado para controlar si el menú está abierto o cerrado
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // 3. Cerramos el menú siempre al hacer click en un link
      setIsNavCollapsed(true);
    }
  };

  return (
    <nav id='HEADER_NAV' className="navbar navbar-expand-lg navbar-light p-3" style={{ backgroundColor: '#F3F3F3' }}>
      <div className="container-fluid">
        
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img 
            src={logo} 
            alt="Logo" 
            width="100"
            className="d-inline-block align-text-top me-2"
          />
        </a>

        {/* 4. Cambiamos el botón para que use nuestro estado */}
        <button 
          className="navbar-toggler" 
          type="button" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse} // Control manual
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 5. Aplicamos las clases 'collapse' y 'show' condicionalmente */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <div className="navbar-nav ms-auto">
            <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('HEADER_NAV')}>Inicio</button>
            <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('SERVICES')}>Servicios</button>
            <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('PRODUCTS')}>Productos</button>
            <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('FOOTER')}>Contacto</button>
          </div>
        </div>
      </div>
    </nav>
  )
}