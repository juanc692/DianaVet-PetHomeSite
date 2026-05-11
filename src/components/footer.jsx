import React from 'react'

export default function footer() {
  return (
    <>
    <footer className="py-5 mt-5" style={{ backgroundColor: '#F3F3F3' }}>
      <div className="container">
        <div className="row">
          {/* Columna 1: Logo e Info */}
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold">DianaVet & Pet Home</h5>
            <p className="text-muted">
              Somos un espacio dedicado al cuidado integral de tu mascota, donde ofrecemos servicios de atención veterinaria, vacunación y baño con secado, siempre con un trato cercano y profesional. Además, contamos con una variedad de alimentos, correas y accesorios de calidad, pensados para el bienestar y felicidad de tu mejor compañero.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="col-6 col-md-4 mb-4 mb-md-0">
            <h6 className="text-uppercase fw-bold">Navegación</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-muted">Inicio</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Servicios</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Productos</a></li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="col-6 col-md-4">
            <h6 className="text-uppercase fw-bold">Contacto</h6>
            <ul className="list-unstyled">
              <li className="text-muted">📍 Tv. 78d #10b 48, Kennedy, Bogotá, Cundinamarca</li>
              <li className="text-muted">📞 +57 315 499 4344</li>
              <li className="text-muted">✉️ contacto@vetvet.com</li>
            </ul>
          </div>
        </div>

        <hr className="my-4 text-muted" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <span className="text-muted small">© 2026 DianaVet & Pet Home. Todos los derechos reservados.</span>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            {/* Aquí puedes poner iconos de redes sociales */}
            <a 
            href="https://www.facebook.com/profile.php?id=100091762744770&sk=photos&_rdc=1&_rdr#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm me-2"
            >
            Facebook
          </a>
            <a 
            href="" 
            target="" 
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm me-2"
            >
            Instagram
          </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}
