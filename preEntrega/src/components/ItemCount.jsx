import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({ stock, onAdd }) => {
  const [contador, setContador] = useState(1); //defino el estado del contador q le paso al boton central
  const [stockDispo, setStock] = useState(stock); //para no excederme del stock
  const [flagVisible, setFlagVisible] = useState(true);

  //desarrollo las funciones 
  const incrementar = () => {
    if (contador < stockDispo) {
      setContador(contador + 1);
    } else {
      console.log("Nos quedamos sin stock!");
    }
  };

  const decrementar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const addToCart = () => { //funcion para agregar al carrito
    if (contador <= stockDispo) {
      setStock(stockDispo - contador);
      onAdd(contador); // indica la cant de productos q se agregan 
      setContador(1); //para q una vez agregue productos vuelva a iniciar en uno
      setFlagVisible(false); //deja de mostrar el boton
      console.log("Agregaste " + contador + " productos al carrito.");
    }
  };


  // modificacion para que el stock se adapte a cada producto
  useEffect(() => {
    setStock(stock);
  }, [stock]);

  return (
    <>
      {flagVisible ? (
        <div className="row">
          <div className="col text-center">
            <div className="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" className="btn btn-success rounded-start-5" onClick={decrementar}>-</button>
              <button type="button" className="btn btn-success">{contador}</button>
              <button type="button" className="btn btn-success rounded-end-5" onClick={incrementar}>+</button>
            </div>
            <div className="col text-center my-2">
              <button type="button" className="btn btn-success rounded-5" onClick={addToCart}>Agregar al Carrito</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="col text-center">
          <div className="row">
          <Link to="/cart" className="text-center mb-1 btn btn-success rounded-5">Ver Carrito</Link>
          </div>
          <div className="row">
          <Link to="/" className="btn btn-success rounded-5 m-3 text-center">Seguir Comprando
          </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemCount;



