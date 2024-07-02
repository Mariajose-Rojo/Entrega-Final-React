import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
      <nav className="navbar" >
        <a className="navbar-title"  href="#">Mi Empresa</a>
        <ul className="navbar-links">
          <li><a href="#categoria1">Categoría 1</a></li>
          <li><a href="#categoria2">Categoría 2</a></li>
          <li><a href="#categoria3">Categoría 3</a></li>
          {/* carrito de compras */}
          <li><a href="#"> 
                <CartWidget/>
            </a>
          </li>
        </ul>
      </nav>
    );
  }

  export default Navbar