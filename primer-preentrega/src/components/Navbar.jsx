import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
      <div className="container bg-light py-4 mb-2">
        <div className="row align-items-center">
            {/* parte del logo */}
            <div className="col">
                <img src="public/logo-farmacity.svg" alt="Logo farmacity"  width={160}/>
            </div>
            {/* parte de la barra de navegacion */}
            <div className="col">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link text-black" href="#">Belleza</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Dermocosmetica</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="#">Salud y Farmacia</a>
                    </li>
                </ul>
            </div>
            {/* carrito de compras */}
            <div className="col text-end">
                <CartWidget/>
            </div>
        </div>
      </div>
    );
  }

  export default Navbar