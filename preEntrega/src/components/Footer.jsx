
const Footer = () => {
    return (
      <footer className="bg-success text-white py-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Promociones</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Ofertas del mes</a></li>
                <li><a href="#" className="text-white text-decoration-none">Descuentos especiales</a></li>
                <li><a href="#" className="text-white text-decoration-none">Nuevos productos</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Sobre Nosotros</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Medios de Pago</a></li>
                <li><a href="#" className="text-white text-decoration-none">Politica de Retorno</a></li>
                <li><a href="#" className="text-white text-decoration-none">Nuestras Sucursales</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Redes Sociales</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Facebook</a></li>
                <li><a href="#" className="text-white text-decoration-none">Twitter</a></li>
                <li><a href="#" className="text-white text-decoration-none">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;