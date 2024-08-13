import { Link } from "react-router-dom";

const Error404 = ()=>{
    return(
        <>
        <div className="row my-5">
          <div className="col text-center ">
              <div className="alert alert-danger" role="alert">
                <h1>❌</h1>
                <h2 className="text-center"><b>Error 404!</b></h2>
                <h3 className="text-center">La página que esta buscando no existe</h3>
                {/* funcion para vaciar el carrito tras registrar la compra */}
                <Link to="/" className="btn btn-success rounded-5 mt-4" onClick={() => clearCart()}>Volver a Inicio</Link>
              </div>
          </div>
        </div>
        </>
    )
}

export default  Error404;