const CartWidget = () => {
    return(
        <div>
            <button type="button" className="btn btn-light position-relative">
            <img src="public/cart.svg" alt="carrito" width={22} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
            </span>
            </button>

        </div>
    )
    
}

export default CartWidget