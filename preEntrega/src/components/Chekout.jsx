import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from 'react-router-dom';

const Chekout = () => {
    //pongo el contexto:
  const { cart, sumProducts } = useContext(CartContext);

  //Estado del form:
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");

    //en caso de que el carrito este vacio
  if (cart.length === 0) {
    return (
      <div className="container text-center">
        <p><img src="/public/bag.svg" alt="" style={{ width:"100px" }}/></p>
        <h2>No hay ítems en el carrito</h2>
        <Link to="/" className="btn btn-success rounded-5 mt-4">
          Volver al inicio
        </Link>
      </div>
    );
  }

  
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
          <form>
            {/* Formulario */}
            <div className="mb-3">
              <label htmlFor="Nombre" className="form-label">Nombre</label>
              <input type="text" className="form-control" onInput={(e) => setNombre(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="text" className="form-control" onInput={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="Nombre" className="form-label">Teléfono</label>
              <input type="text" className="form-control" onInput={(e) => setCelular(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success rounded-5 mt-2">Generar Orden</button>
          </form>
        </div>
        <div className="col">
          <div className="table"> {/* Tabla de la compra */}
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td className="align-middle"><img src={item.img} alt={item.Nombre} width={70} /></td>
                  <td className="align-middle card-text pb-2 fs-5">{item.Nombre}</td>
                  <td className="align-middle card-text pb-2 fs-5">{item.precio} x {item.quantity}</td>
                  <td className="align-middle card-text pb-2 fs-5">{item.precio * item.quantity}</td>
                </tr>
              ))}
              <tr>
                <td className="align-middle text-center card-text pb-2 fs-5" colSpan={3}><b>Total a Pagar</b></td>
                <td className="align-middle text-center card-text pb-2 fs-5"><b>${sumProducts()}</b></td>
              </tr>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chekout;
