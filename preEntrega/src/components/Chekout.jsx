import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Chekout = () => {
  //pongo el contexto:
  const { cart, sumProducts, clearCart } = useContext(CartContext);

  //Estado del form:
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [orderId, setOrderId] = useState("");

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos del formulario
    if (nombre === "" || email === "" || celular === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Genero la orden de compra
    const order = {
      buyer: { name: nombre, phone: celular, email: email },
      items: cart.map(item => ({ id: item.id, title: item.Nombre, price: item.precio })),
      total: sumProducts(),
    };

    // Cargo la orden al Firebase
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(respuesta => {
      setOrderId(respuesta.id);
    });
  };

  //en caso de que el carrito este vacio
  if (cart.length === 0) {
    return (
      <div className="container text-center">
        <p><img src="/public/bag.svg" alt="" style={{ width: "100px" }} /></p>
        <h2>No hay ítems en el carrito</h2>
        <Link to="/" className="btn btn-success rounded-5 mt-4">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="celular" className="form-label">Teléfono</label>
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
        <div className="row my-5">
          {/* /Evaluo si se genero una orden */}
          <div className="col text-center ">
            {orderId ? (
              <div className="alert alert-success" role="alert">
                <h3 className="text-center">Gracias por su compra!</h3>
                <p className="text-center">Su número de orden es: <b>{orderId}</b></p>
                {/* funcion para vaciar el carrito tras registrar la compra */}
                <Link to="/" className="btn btn-success rounded-5 mt-4" onClick={() => clearCart()}>Volver a Inicio</Link>
              </div>
            ) : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default Chekout;

