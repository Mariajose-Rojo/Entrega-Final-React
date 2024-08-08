//uso contexto para saber cuantos eleemntos tiene el carrito
import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = () => {
    const {totalProducts}= useContext (CartContext);

    if ( totalProducts() > 0) {

        return(
                <Link to= {"/cart"}>
                <div>
                    <button type="button" className="btn btn-light position-relative">
                    <img src="public/cart.svg" alt="carrito" width={22} />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {totalProducts()} </span>
                    </button>
        
                </div>
                </Link>
        )
    }
    else{
        <div>
            <button type="button" className="btn btn-light position-relative">
            <img src="public/cart.svg" alt="carrito" width={22} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        
        </div>
    }
    
}

export default CartWidget