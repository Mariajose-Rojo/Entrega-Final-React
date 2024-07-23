import { useEffect, useState } from "react";
import arrayProduct from "../assets/json/products.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        resolve(arrayProduct.find(item => item.id === 1));
      }, 2000);
    });

    promesa.then((data) => {
      setItem(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;