import{Link, NavLink} from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
      <div className="container bg-light py-4 mb-2">
        <div className="row align-items-center">
            {/* parte del logo */}
            <div className="col">
                <Link to={"/"}>
                    <img src={"/public/logo-farmacity.svg"} alt="Logo farmacity"  width={160}/>
                </Link>
            </div>
            {/* parte de la barra de navegacion */}
            <div className="col">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to={"/categoria/Belleza"} className="nav-link text-black">Belleza</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/categoria/Dermocosmetica"} className="nav-link text-black" >Dermocosmetica</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/categoria/Salud-Farmacia"} className="nav-link text-black">Salud y Farmacia</NavLink>
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