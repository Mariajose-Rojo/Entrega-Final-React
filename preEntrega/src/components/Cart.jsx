import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext';

const Cart = () => {
  const { cart, removeItem, totalProducts, clearCart } = useContext(CartContext);

  //calcula el precio total de los ítems en el carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  //Para saber si el carrito esta vacio
  if (cart.length === 0) {
    return (
      <div className="container text-center">
        <h2>No hay ítems en el carrito</h2>
        <Link to="/" className="btn btn-success rounded-5 mt-4">
          Volver al inicio
        </Link>
      </div>
    );
  }


  //Si el carrito no está vacío, se hace un desglose de los ítems con map
  return (
    <div className="container">
      <h2 className="text-center"><b>Carrito de Compras</b></h2>
      <div className="row">
        {cart.map(item => (
          <div key={item.id} className="col-md-4 p-3">
            <div className="card border-0 gap-2 shadow-sm h-500 d-flex flex-column">
              <img src={item.img} className="card-img-top" alt={item.Nombre} style={{ objectFit: 'contain', height: '200px' }} />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title text-center pt-1">{item.Nombre}</h5>
                <p className="card-text text-center pt-4 fs-4">
                  <b>${item.precio}</b> x {item.quantity}
                </p>
                <p className="card-text text-center pt-4 fs-4">
                  Subtotal: <b>${item.precio * item.quantity}</b>
                </p>
                
                <button type="button" className="btn btn-danger rounded-5 mt-auto" onClick={() => removeItem(item.id)}> 
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-4 p-2">
        <h3>Total: ${getTotalPrice()}</h3>
        <button className="btn btn-danger rounded-5 mt-2" onClick={clearCart}>
          Vaciar Carrito
        </button>
        <Link to="/" className="btn btn-success rounded-5 mt-2">
          Seguir Comprando
        </Link>
        <button className="btn btn-primary rounded-5 mt-2">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};

export default Cart;