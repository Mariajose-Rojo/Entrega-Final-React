import { useEffect, useState } from "react";
import arrayProduct from "../assets/json/products.json";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    //seteo el estado con un array vacio inicial
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        resolve(arrayProduct);
      }, 2000);
    });

    promesa.then(data => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;