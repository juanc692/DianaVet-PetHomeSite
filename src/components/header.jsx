import React, { useState } from 'react' // 
import { Link } from 'react-router-dom'
import logo from '../assets/dianaVetLogo.png'

export default function Header() {

  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

      setIsNavCollapsed(true);
    }
  };

  return (
    <nav id='HEADER_NAV' className="navbar navbar-expand-lg navbar-light p-3" style={{ backgroundColor: '#C5FDC5' }}>
      <div className="container-fluid">
        
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img 
            src={logo} 
            alt="Logo" 
            width="100"
            className="d-inline-block align-text-top me-2"
          />
        </a>


        <button 
          className="navbar-toggler" 
          type="button" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse} // Control manual
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <div className="navbar-nav ms-auto">
            {/* <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('HEADER_NAV')}>Inicio</button> */}
            <Link
              to="/"
              className="nav-link btn-link border-0 bg-transparent text-black me-3"
            >Inicio</Link>
            <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('SERVICES')}>Servicios</button>
            <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('PRODUCTS')}>Productos</button>
            <button className="nav-link btn-link border-0 bg-transparent text-black me-3" onClick={() => scrollToSection('FOOTER')}>Contacto</button>
          </div>
        </div>
      </div>
    </nav>
  )
}